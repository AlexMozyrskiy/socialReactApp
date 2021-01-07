import React from "react";
import LoginModalWindow from "./LoginModalWindow";
import { getIsModalLoginWindowAciveSelector } from "../../BLL/loginModalWindow/selectors";
import { setIsModalLoginWindowActive } from "../../BLL/loginModalWindow/actionCreators";
import { getIsHeaderLoginButtonClickedSelector } from "../../BLL/header/selectors";
import { setIsHeaderLoginButtonClicked } from "../../BLL/header/actionCreators";
import { connect } from "react-redux";

const LoginModalWindowContainer = (props) => {

    function toogleIsModalLoginWindowAcive(IsModalLoginWindowAcive) {           // функция для изменение в стейте состояния показывать ли анимацию кнопки логина в хедере
        props.setIsModalLoginWindowActive(IsModalLoginWindowAcive);
        props.setIsHeaderLoginButtonClicked(IsModalLoginWindowAcive);
    }

    return <LoginModalWindow
        isModalLoginWindowAcive={props.isModalLoginWindowAcive}
        toogleIsModalLoginWindowAcive={toogleIsModalLoginWindowAcive}
        isHeaderLoginButtonClicked={props.isHeaderLoginButtonClicked}
    />
}


const mapStateToProps = (state) => {
    return {
        isModalLoginWindowAcive: getIsModalLoginWindowAciveSelector(state),
        isHeaderLoginButtonClicked: getIsHeaderLoginButtonClickedSelector(state)
    }
}

export default connect(mapStateToProps, {setIsModalLoginWindowActive, setIsHeaderLoginButtonClicked})(LoginModalWindowContainer);