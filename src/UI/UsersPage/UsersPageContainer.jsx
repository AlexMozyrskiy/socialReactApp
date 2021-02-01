import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    getUsersArraySelector, getTotalUsersCountSelector,
    getUsersCurrentPageSelector, getIsPreloaderActiveSelector,
    getIdClickedFollowButtonsArray, getRunUseEffect, getIsFirstUsersLoaded,
    getIsButtonLoadMoreUsersClicked, getCountOfShownUsers
} from "../../BLL/users/selectors";
import { getIsLoggedInSelector } from "../../BLL/authUserData/selectors";
import { setCurrentPage, toogleRunUseEffect } from "../../BLL/users/actionCreators";
import { getUsersThunkCreator, followUserThunkCreator } from "../../BLL/users/thunkCreators";
import UsersPage from "./UsersPage";
import cn from "classnames";

const UsersPageContainer = (props) => {

    let [currentPageForPagination, changeCurrentPageForPagination] = useState(1);   // активная страница для пагинации цифрами вверзу страницы юзеров
    let [firstPageForPagination, changeFirstPageForPagination] = useState(1);       // с какой цифры начинаются квадратики пагинации вверху страницы (будет меняться, если текущая страница будет бельше цифры в последнем квалратике пагинации или меньше цифры в первом квадратике)
    let [lastPageForPagination, changeLastPageForPagination] = useState(10);        // цифра в последнем квалратике пагинации, не последняя возможная страница, а именно цифра перед троеточием, также будет меняться

    useEffect(() => {
        if (props.runUseEffect) {                               // если пришли с прошлой странице при первом рендере useEffect запустится в любом случае, по этому вводим доп свойсто в стейт
            props.getUsersThunkCreator(props.isFirstUsersLoaded, props.currentPage, props.countOfShownUsers);
        }
    }, [props.currentPage]);

    const maxCountOfPaginationQuads = Math.ceil(props.totalUsersCountInServer / props.countOfShownUsers);       // цифра которая будет в последнем квадратике пагинации (после троеточия), то есть макисмально возможная показываемая страница
    console.log(maxCountOfPaginationQuads);

    function followUnfollowUser(id, isFollow) {
        props.followUserThunkCreator(id, isFollow);
        // console.log(id, isFollow);
    }

    function loadNextPartOfUsers(nextPage) {
        props.toogleRunUseEffect(true);
        props.setCurrentPage(nextPage);
        // props.toogleRunUseEffect(false);
    }

    function changePaginationPages(numberOfClickedQuad) {       // при клике на какой либо квадратик пагинации
        if (numberOfClickedQuad > 0 && numberOfClickedQuad <= maxCountOfPaginationQuads) {                          // чтобы цтфры в квадратиках пагинации не были отрицательными
            numberOfClickedQuad = Number(numberOfClickedQuad);
            changeCurrentPageForPagination(numberOfClickedQuad);   // изменим текущую страницу
            // console.log(numberOfClickedQuad)
            // console.log(currentPageForPagination)
            // debugger

            if (numberOfClickedQuad > lastPageForPagination) {                  // если цифра в кликнутом квадратике больше чем цифра в последнем квадратике (то есть нажали стрелочку вправо на находясь на посленем квадратике)
                changeFirstPageForPagination(numberOfClickedQuad - 9);         // присвоим первому квадратику соответствующую цифру чтобы отображалось так же 10 квадратиков
                changeLastPageForPagination(numberOfClickedQuad);
            } else if (numberOfClickedQuad < firstPageForPagination) {          // если цифра в кликнутом квадратике меньше чем цифра в первом квадратике
                changeFirstPageForPagination(numberOfClickedQuad);
                changeLastPageForPagination(numberOfClickedQuad + 9);
            }
        }
    }

    // ----------- Создадим массив спанов для отображения квадратиков пагинации ----------------
    let paginationQuads = new Array();
    for (let i = firstPageForPagination; i <= lastPageForPagination; i++) {
        paginationQuads.push(
            <span
                key={i}
                className={cn("users__pagination-single-span", { "users__pagination-single-span_active": i === currentPageForPagination })}     // если i равно текущей страницы додавим класс активности
                onClick={(e) => changePaginationPages(e.currentTarget.innerHTML)}
            >
                {i}
            </span>
        );
    }
    // ----------- / Создадим массив спанов для отображения квадратиков пагинации --------------

    return <UsersPage
        isPreloaderActive={props.isPreloaderActive}
        usersArray={props.usersArray}
        followUnfollowUser={followUnfollowUser}
        isLoggedIn={props.isLoggedIn}
        clickedFollowButtonsArray={props.clickedFollowButtonsArray}
        currentPage={props.currentPage}
        loadNextPartOfUsers={loadNextPartOfUsers}
        isButtonLoadMoreUsersClicked={props.isButtonLoadMoreUsersClicked}
        currentPageForPagination={currentPageForPagination}
        // firstPageForPagination={firstPageForPagination}
        // lastPageForPagination={lastPageForPagination}
        paginationQuads={paginationQuads}
        changePaginationPages={changePaginationPages}
        maxCountOfPaginationQuads={maxCountOfPaginationQuads}
    />
}


const mapStateToProps = (state) => {
    return {
        countOfShownUsers: getCountOfShownUsers(state),         // какое количество юзеров показывать за один раз, так же для GET запроса
        totalUsersCountInServer: getTotalUsersCountSelector(state),     // всего юзеров на сервере
        usersArray: getUsersArraySelector(state),
        currentPage: getUsersCurrentPageSelector(state),
        isPreloaderActive: getIsPreloaderActiveSelector(state),
        isLoggedIn: getIsLoggedInSelector(state),
        clickedFollowButtonsArray: getIdClickedFollowButtonsArray(state),
        runUseEffect: getRunUseEffect(state),
        isFirstUsersLoaded: getIsFirstUsersLoaded(state),                   // тут это свойство используется так: если первый раз юзеров уже загрузили больше большой прелоадер показывать не будем, а будем вместо кнопки показать еще юзеров(в самом низу страницы) показывать лотадер кнопки
        isButtonLoadMoreUsersClicked: getIsButtonLoadMoreUsersClicked(state)
    }
}

const mapDispatchToProps = {
    getUsersThunkCreator,
    followUserThunkCreator,
    setCurrentPage,
    toogleRunUseEffect
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);
