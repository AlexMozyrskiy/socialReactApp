import React from "react";
import { connect } from "react-redux";
import HeaderLoginButton from "./HeaderLoginButton";
import { getIsModalLoginWindowAciveSelector } from "../../../BLL/loginModalWindow/selectors";
import { setIsModalLoginWindowActive } from "../../../BLL/loginModalWindow/actionCreators";

const HeaderLoginButtonContainer = (props) => {

    function toogleIsModalLoginWindowAcive(IsModalLoginWindowAcive) {       // функция для изменение в стейте состояния показывать ли млжальное окно логина
        props.setIsModalLoginWindowActive(IsModalLoginWindowAcive);
    }

    return (
        <HeaderLoginButton
            isModalLoginWindowAcive={props.isModalLoginWindowAcive}
            toogleIsModalLoginWindowAcive={toogleIsModalLoginWindowAcive}
        />
    );
}




const mapStateToProps = (state) => {
    return {
        isModalLoginWindowAcive: getIsModalLoginWindowAciveSelector(state)
    }
}

export default connect(mapStateToProps, {setIsModalLoginWindowActive})(HeaderLoginButtonContainer);