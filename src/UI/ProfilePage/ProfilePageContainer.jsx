import React from "react";
import OwnerProfilePage from "./OwnerProfilePage/OwnerProfilePage";
import SomeoneElseProfilePageContainer from "./SomeoneElseProfilePage/SomeoneElseProfilePageContainer";
import { withRouter } from "react-router-dom";
import { getIsLoggedInSelector, getOwnerIdSelector } from "../../BLL/authUserData/selectors";
import { connect } from "react-redux";
import { compose } from "redux";

const ProfilePageContainer = (props) => {
    if (props.ownerId == props.match.params.userId) {
        return <OwnerProfilePage
            ownerId={props.ownerId}
            userIdFromUrl={props.match.params.userId}          // id из адресной строки
        />
    } else {
        return <SomeoneElseProfilePageContainer userIdFromUrl={props.match.params.userId} />
    }
}



const mapStateToProps = (state) => {
    return {
        isLoggedIn: getIsLoggedInSelector(state),
        ownerId: getOwnerIdSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(ProfilePageContainer);