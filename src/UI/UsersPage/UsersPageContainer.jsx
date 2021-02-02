import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    getUsersArraySelector, getTotalUsersCountSelector,
    getUsersCurrentPageSelector, getIsPreloaderActiveSelector,
    getIdClickedFollowButtonsArray, getRunUseEffect, getIsFirstUsersLoaded,
    getIsButtonLoadMoreUsersClicked, getCountOfShownUsers,
    getNumberInFirstPaginationSquare, getNumberInLastPaginationSquare
} from "../../BLL/users/selectors";
import { getIsLoggedInSelector } from "../../BLL/authUserData/selectors";
import {
    setCurrentPage, toogleRunUseEffect,
    toogleIsFirstUsersLoaded, setNumbersInFirstLastPaginationSquares
} from "../../BLL/users/actionCreators";
import { getUsersThunkCreator, followUserThunkCreator } from "../../BLL/users/thunkCreators";
import UsersPage from "./UsersPage";
import cn from "classnames";

const UsersPageContainer = (props) => {

    const maxCountOfPaginationSquares = Math.ceil(props.totalUsersCountInServer / props.countOfShownUsers);       // цифра которая будет в последнем квадратике пагинации (после троеточия), то есть макисмально возможная показываемая страница

    let [currentPageForPagination, changeCurrentPageForPagination] = useState(props.currentPage);   // активная страница для пагинации цифрами вверзу страницы юзеров

    useEffect(() => {
        if (props.runUseEffect) {                               // если пришли с прошлой странице при первом рендере useEffect запустится в любом случае, по этому вводим доп свойсто в стейт
            props.getUsersThunkCreator(props.currentPage, props.countOfShownUsers, props.isFirstUsersLoaded);
        }
    }, [props.currentPage]);

    function followUnfollowUser(id, isFollow) {
        props.followUserThunkCreator(id, isFollow);
    }

    function loadNextPartOfUsers(nextPage) {
        props.toogleRunUseEffect(true);
        props.setCurrentPage(nextPage);
    }

    function loadNewUsersAfterPaginationSquareClick(page) {
        props.toogleIsFirstUsersLoaded(false);                  // чтобы партия полученных с сервера юзеров заменила текущий массив юзеров
        props.toogleRunUseEffect(true);
        props.setCurrentPage(page);
    }

    function changePaginationPages(numberOfClickedSquare) {       // при клике на какой либо квадратик пагинации
        if (numberOfClickedSquare > 0 && numberOfClickedSquare <= maxCountOfPaginationSquares) {                          // чтобы цтфры в квадратиках пагинации не были отрицательными и больше максимально допустимого
            numberOfClickedSquare = Number(numberOfClickedSquare);
            changeCurrentPageForPagination(numberOfClickedSquare);   // изменим текущую страницу
            loadNewUsersAfterPaginationSquareClick(numberOfClickedSquare);

            if (numberOfClickedSquare > props.numberInLastPaginationSquare) {                  // если цифра в кликнутом квадратике больше чем цифра в последнем квадратике (то есть нажали стрелочку вправо на находясь на посленем квадратике)
                props.setNumbersInFirstLastPaginationSquares((numberOfClickedSquare - 9), numberOfClickedSquare)
                loadNewUsersAfterPaginationSquareClick(numberOfClickedSquare);
            } else if (numberOfClickedSquare < props.numberInFirstPaginationSquare) {          // если цифра в кликнутом квадратике меньше чем цифра в первом квадратике
                props.setNumbersInFirstLastPaginationSquares(numberOfClickedSquare, (numberOfClickedSquare + 9))
                loadNewUsersAfterPaginationSquareClick(numberOfClickedSquare);
            }
        }
    }

    // ----------- Создадим массив спанов для отображения квадратиков пагинации ----------------
    let paginationSquares = [];
    for (let i = props.numberInFirstPaginationSquare; i <= props.numberInLastPaginationSquare; i++) {
        paginationSquares.push(
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
        paginationSquares={paginationSquares}
        changePaginationPages={changePaginationPages}
        maxCountOfPaginationSquares={maxCountOfPaginationSquares}
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
        isButtonLoadMoreUsersClicked: getIsButtonLoadMoreUsersClicked(state),
        numberInFirstPaginationSquare: getNumberInFirstPaginationSquare(state),
        numberInLastPaginationSquare: getNumberInLastPaginationSquare(state)
    }
}

const mapDispatchToProps = {
    getUsersThunkCreator,
    followUserThunkCreator,
    setCurrentPage,
    toogleRunUseEffect,
    toogleIsFirstUsersLoaded,
    getNumberInFirstPaginationSquare,
    getNumberInLastPaginationSquare,
    setNumbersInFirstLastPaginationSquares
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);
