import React from "react";
import HeaderLoginButton from "./HeaderLoginButton";
import { getisModalLoginWindowAciveSelector } from "../../../BLL/loginModalWindow/selectors";
import { connect } from "react-redux";
import { setIsModalLoginWindowActive } from "../../../BLL/loginModalWindow/actionCreators";

const HeaderLoginButtonContainer = (props) => {

    function toogleIsModalLoginWindowAcive(IsModalLoginWindowAcive) {
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
        isModalLoginWindowAcive: getisModalLoginWindowAciveSelector(state)
    }
}

export default connect(mapStateToProps, {setIsModalLoginWindowActive})(HeaderLoginButtonContainer);