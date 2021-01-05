import React from "react";
import { connect } from "react-redux";
import LoginModalWindowForm from "./LoginModalWindowForm";
import { loginThunkCreator } from "../../../BLL/loginModalWindow/thunkCreators"
import { getIsLoginButtonClickedSelector } from "../../../BLL/loginModalWindow/selectors";

const LoginModalWindowFormContainer = (props) => {

    function onSubmit(formData) {
        console.log(formData);
        // тут действия которые выполнятся при сабмите формы
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    return (
        <LoginModalWindowForm
            onSubmit={onSubmit}
            isLoginButtonClicked={props.isLoginButtonClicked}
        />
    );
}


const mapStateToProps = (state) => {
    return {
        isLoginButtonClicked: getIsLoginButtonClickedSelector(state)
    }
}

export default connect(mapStateToProps, { loginThunkCreator })(LoginModalWindowFormContainer);