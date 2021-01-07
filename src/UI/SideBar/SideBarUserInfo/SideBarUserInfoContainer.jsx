import React from "react";
import SideBarUserInfo from "./SideBarUserInfo";
import {
    getOwnerStatusSelector, getOwnerFullNameSelector,
    getOwnerSmallPhotoSelector, getIsLoggedInSelector
} from "../../../BLL/authUserData/selectors";
import { connect } from "react-redux";

const SideBarUserInfoContainer = (props) => {
    return <SideBarUserInfo
        isLoggedIn={props.isLoggedIn}
        ownerStatus={props.ownerStatus}
        ownerFullName={props.ownerFullName}
        ownerSmallPhoto={props.ownerSmallPhoto}
    />
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: getIsLoggedInSelector(state),
        ownerStatus: getOwnerStatusSelector(state),
        ownerFullName: getOwnerFullNameSelector(state),
        ownerSmallPhoto: getOwnerSmallPhotoSelector(state)
    }
}

export default connect(mapStateToProps, {})(SideBarUserInfoContainer);