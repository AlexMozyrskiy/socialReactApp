import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    getUsersArraySelector, getTotalUsersCountSelector,
    getUsersCurrentPageSelector, getIsPreloaderActiveSelector,
    getIdClickedFollowButtonsArray, getRunUseEffect
} from "../../BLL/users/selectors";
import { getIsLoggedInSelector } from "../../BLL/authUserData/selectors";
import { setCurrentPage, toogleRunUseEffect } from "../../BLL/users/actionCreators";
import { getUsersThunkCreator, followUserThunkCreator } from "../../BLL/users/thunkCreators";
import UsersPage from "./UsersPage";

const UsersPageContainer = (props) => {

    useEffect(() => {
        if (props.runUseEffect) {                               // если пришли с прошлой странице при первом рендере useEffect запустится в любом случае, по этому вводим доп свойсто в стейт
            props.getUsersThunkCreator(props.currentPage, 5);
        }
    }, [props.currentPage]);

    function followUnfollowUser(id, isFollow) {
        props.followUserThunkCreator(id, isFollow);
        // console.log(id, isFollow);
    }

    function loadNextPartOfUsers(nextPage) {
        props.toogleRunUseEffect(true);
        props.setCurrentPage(nextPage);
        // props.toogleRunUseEffect(false);
    }

    return <UsersPage
        isPreloaderActive={props.isPreloaderActive}
        usersArray={props.usersArray}
        followUnfollowUser={followUnfollowUser}
        isLoggedIn={props.isLoggedIn}
        clickedFollowButtonsArray={props.clickedFollowButtonsArray}
        currentPage={props.currentPage}
        loadNextPartOfUsers={loadNextPartOfUsers}
    />
}


const mapStateToProps = (state) => {
    return {
        usersArray: getUsersArraySelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getUsersCurrentPageSelector(state),
        isPreloaderActive: getIsPreloaderActiveSelector(state),
        isLoggedIn: getIsLoggedInSelector(state),
        clickedFollowButtonsArray: getIdClickedFollowButtonsArray(state),
        runUseEffect: getRunUseEffect(state)
    }
}

const mapDispatchToProps = {
    getUsersThunkCreator,
    followUserThunkCreator,
    setCurrentPage,
    toogleRunUseEffect
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);
