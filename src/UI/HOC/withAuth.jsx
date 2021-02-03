import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsLoggedInSelector } from "../../BLL/authUserData/selectors";
import { setIsModalLoginWindowActive, toogleIsLoginRequirement } from "../../BLL/loginModalWindow/actionCreators";

const mapStateToProps = (state) => {
    return {
        isLoggedIn: getIsLoggedInSelector(state),
    }
}

export const withAuth = (Component) => {
    const withAuthtContainer = (props) => {
        if (!props.isLoggedIn) {
            props.toogleIsLoginRequirement(true);
            props.setIsModalLoginWindowActive(true);
            return <Redirect to="/users" />
        } else {
            return <Component {...props} />
        }
    }
    return connect(mapStateToProps, { setIsModalLoginWindowActive, toogleIsLoginRequirement })(withAuthtContainer);
}