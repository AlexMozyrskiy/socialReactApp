import React from "react";
import LoginModalWindow from "./LoginModalWindow";
import { getisModalLoginWindowAciveSelector } from "../../BLL/loginModalWindow/selectors";
import { setIsModalLoginWindowActive } from "../../BLL/loginModalWindow/actionCreators";
import { connect } from "react-redux";

const LoginModalWindowContainer = (props) => {

    function toogleIsModalLoginWindowAcive(IsModalLoginWindowAcive) {
        props.setIsModalLoginWindowActive(IsModalLoginWindowAcive);
    }

    return <LoginModalWindow
        isModalLoginWindowAcive={props.isModalLoginWindowAcive}
        toogleIsModalLoginWindowAcive={toogleIsModalLoginWindowAcive}
    />
}


const mapStateToProps = (state) => {
    return {
        isModalLoginWindowAcive: getisModalLoginWindowAciveSelector(state)
    }
}

export default connect(mapStateToProps, {setIsModalLoginWindowActive})(LoginModalWindowContainer);