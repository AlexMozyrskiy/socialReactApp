import React from "react";
import LoginModalWindow from "./LoginModalWindow";
import { getIsModalLoginWindowAciveSelector } from "../../BLL/loginModalWindow/selectors";
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
        isModalLoginWindowAcive: getIsModalLoginWindowAciveSelector(state)
    }
}

export default connect(mapStateToProps, {setIsModalLoginWindowActive})(LoginModalWindowContainer);