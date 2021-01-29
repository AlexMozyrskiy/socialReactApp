import React from "react";
import { connect } from "react-redux";
import HeaderLoginButton from "./HeaderLoginButton";
import { getIsLoggedInSelector } from "../../../BLL/authUserData/selectors";
import { getIsHeaderLoginButtonClickedSelector } from "../../../BLL/header/selectors";
import { setIsModalLoginWindowActive } from "../../../BLL/loginModalWindow/actionCreators";
import { setIsHeaderLoginButtonClicked } from "../../../BLL/header/actionCreators";
import { setRunUseEffectAppComponent } from "../../../BLL/authUserData/actionCreators";
import { logOutThunkCreator } from "../../../BLL/header/thunkCreators";

const HeaderLoginButtonContainer = (props) => {

    function toogleIsModalLoginWindowAcive(isModalLoginWindowAcive) {       // функция для изменение в стейте состояния показывать ли модальное окно логина
        props.setIsModalLoginWindowActive(isModalLoginWindowAcive);
        props.setIsHeaderLoginButtonClicked(isModalLoginWindowAcive);
    }

    function logOutButtonClicked() {       // функция для запуска санки логаута
        props.setRunUseEffectAppComponent(true);
        props.logOutThunkCreator();
    }

    return (
        <HeaderLoginButton
            toogleIsModalLoginWindowAcive={toogleIsModalLoginWindowAcive}
            isLoggedIn={props.isLoggedIn}
            isHeaderLoginButtonClicked={props.isHeaderLoginButtonClicked}
            logOutButtonClicked={logOutButtonClicked}
        />
    );
}




const mapStateToProps = (state) => {
    return {
        isLoggedIn: getIsLoggedInSelector(state),
        isHeaderLoginButtonClicked: getIsHeaderLoginButtonClickedSelector(state)
    }
}

export default connect(mapStateToProps, {
    setIsModalLoginWindowActive, setIsHeaderLoginButtonClicked,
    logOutThunkCreator, setRunUseEffectAppComponent
})(HeaderLoginButtonContainer);