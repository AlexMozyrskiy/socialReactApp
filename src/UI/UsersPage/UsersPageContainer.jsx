import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    getUsersArraySelector, getTotalUsersCountSelector,
    getUsersCurrentPageSelector, getIsPreloaderActiveSelector,
    getIdClickedFollowButtonsArray
} from "../../BLL/users/selectors";
import { getIsLoggedInSelector } from "../../BLL/authUserData/selectors";
import { getUsersThunkCreator, followUserThunkCreator } from "../../BLL/users/thunkCreators";
import UsersPage from "./UsersPage";

const UsersPageContainer = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, 10);
    }, [props.currentPage])

    function followUnfollowUser(id, isFollow) {
        props.followUserThunkCreator(id, isFollow);
        // console.log(id, isFollow);
    }

    return <UsersPage
        isPreloaderActive={props.isPreloaderActive}
        usersArray={props.usersArray}
        followUnfollowUser={followUnfollowUser}
        isLoggedIn={props.isLoggedIn}
        clickedFollowButtonsArray={props.clickedFollowButtonsArray}
    />
}


const mapStateToProps = (state) => {
    return {
        usersArray: getUsersArraySelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getUsersCurrentPageSelector(state),
        isPreloaderActive: getIsPreloaderActiveSelector(state),
        isLoggedIn: getIsLoggedInSelector(state),
        clickedFollowButtonsArray: getIdClickedFollowButtonsArray(state)
    }
}

const mapDispatchToProps = {
    getUsersThunkCreator,
    followUserThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);
