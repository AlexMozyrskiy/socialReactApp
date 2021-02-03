import React from "react";
import LoginModalWindow from "./LoginModalWindow";
import { getIsModalLoginWindowActiveSelector, getIsLoginRequirementSelector } from "../../BLL/loginModalWindow/selectors";
import { setIsModalLoginWindowActive, toogleIsLoginRequirement } from "../../BLL/loginModalWindow/actionCreators";
import { getIsHeaderLoginButtonClickedSelector } from "../../BLL/header/selectors";
import { getIsLoggedInSelector } from "../../BLL/authUserData/selectors";
import { setIsHeaderLoginButtonClicked } from "../../BLL/header/actionCreators";
import { connect } from "react-redux";

const LoginModalWindowContainer = (props) => {

    function toogleIsModalLoginWindowActive(IsModalLoginWindowActive) {           // функция для изменение в стейте состояния показывать ли анимацию кнопки логина в хедере
        props.setIsModalLoginWindowActive(IsModalLoginWindowActive);
        props.setIsHeaderLoginButtonClicked(IsModalLoginWindowActive);
        props.toogleIsLoginRequirement(false);

    }

    return <LoginModalWindow
        isModalLoginWindowActive={props.isModalLoginWindowActive}
        toogleIsModalLoginWindowActive={toogleIsModalLoginWindowActive}
        isHeaderLoginButtonClicked={props.isHeaderLoginButtonClicked}
        isLoggedIn={props.isLoggedIn}
        isLoginRequirementActive={props.isLoginRequirementActive}
    />
}


const mapStateToProps = (state) => {
    return {
        isModalLoginWindowActive: getIsModalLoginWindowActiveSelector(state),
        isHeaderLoginButtonClicked: getIsHeaderLoginButtonClickedSelector(state),
        isLoggedIn: getIsLoggedInSelector(state),
        isLoginRequirementActive: getIsLoginRequirementSelector(state)
    }
}

const mapDispatchToProps = {
    setIsModalLoginWindowActive,
    setIsHeaderLoginButtonClicked,
    toogleIsLoginRequirement
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalWindowContainer);