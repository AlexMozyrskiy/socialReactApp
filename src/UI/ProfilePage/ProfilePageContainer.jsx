import React from "react";
import OwnerProfilePage from "./OwnerProfilePage/OwnerProfilePage";
import SomeoneElseProfilePageContainer from "./SomeoneElseProfilePage/SomeoneElseProfilePageContainer";
import { withRouter } from "react-router-dom";
import { getIsLoggedInSelector, getOwnerIdSelector } from "../../BLL/authUserData/selectors";
import { getNotOwnerIdSelector } from "../../BLL/notOwnerUserData/selectors";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuth } from "../../UI/HOC/withAuth";

const ProfilePageContainer = (props) => {

    props.match.params.userId = Number(props.match.params.userId);

    if (props.ownerId === props.match.params.userId) {
        return <OwnerProfilePage
            ownerId={props.ownerId}
            userIdFromUrl={props.match.params.userId}          // id из адресной строки
        />
    } else {
        return <SomeoneElseProfilePageContainer
            
        />
    }
}



const mapStateToProps = (state) => {
    return {
        isLoggedIn: getIsLoggedInSelector(state),
        ownerId: getOwnerIdSelector(state),
        notOwnerId: getNotOwnerIdSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, { }),
    withRouter,
    withAuth
)(ProfilePageContainer);