import React from "react";
import { connect } from "react-redux";
import HeaderLoginButton from "./HeaderLoginButton";
import { getIsModalLoginWindowAciveSelector } from "../../../BLL/loginModalWindow/selectors";
import { getIsLoggedInSelector } from "../../../BLL/authUserData/selectors";
import { setIsModalLoginWindowActive } from "../../../BLL/loginModalWindow/actionCreators";

const HeaderLoginButtonContainer = (props) => {

    function toogleIsModalLoginWindowAcive(isModalLoginWindowAcive) {       // функция для изменение в стейте состояния показывать ли млжальное окно логина
        props.setIsModalLoginWindowActive(isModalLoginWindowAcive);
    }

    return (
        <HeaderLoginButton
            isModalLoginWindowAcive={props.isModalLoginWindowAcive}
            toogleIsModalLoginWindowAcive={toogleIsModalLoginWindowAcive}
            isLoggedIn={props.isLoggedIn}
        />
    );
}




const mapStateToProps = (state) => {
    return {
        isModalLoginWindowAcive: getIsModalLoginWindowAciveSelector(state),             // активно ли модальное окно логина
        isLoggedIn: getIsLoggedInSelector(state)
    }
}

export default connect(mapStateToProps, {setIsModalLoginWindowActive})(HeaderLoginButtonContainer);