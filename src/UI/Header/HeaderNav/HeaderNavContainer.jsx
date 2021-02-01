import React from "react";
import HeaderNav from "./HeaderNav";
import { getOwnerIdSelector, getIsLoggedInSelector } from "../../../BLL/authUserData/selectors";
import { connect } from "react-redux";

const HeaderNavContainer = (props) => {
    return <HeaderNav
        isLoggedIn={props.isLoggedIn}
        ownerId={props.ownerId}
    />
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: getIsLoggedInSelector(state),
        ownerId: getOwnerIdSelector(state)
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavContainer);