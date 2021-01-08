import React from "react";
import { connect } from "react-redux";
import LoginModalWindowForm from "./LoginModalWindowForm";
import { logInThunkCreator } from "../../../BLL/loginModalWindow/thunkCreators"
import {
    getIsLoginButtonClickedSelector, getIsCaptchActiveSelector,
    getCaptchaURLSelector
} from "../../../BLL/loginModalWindow/selectors";

const LoginModalWindowFormContainer = (props) => {

    function onSubmit(formData) {
        // тут действия которые выполнятся при сабмите формы
        props.logInThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    return (
        <LoginModalWindowForm
            onSubmit={onSubmit}
            isLoginButtonClicked={props.isLoginButtonClicked}
            isCapthaActive={props.isCapthaActive}
            captchaURL={props.captchaURL}
        />
    );
}


const mapStateToProps = (state) => {
    return {
        isLoginButtonClicked: getIsLoginButtonClickedSelector(state),
        isCapthaActive: getIsCaptchActiveSelector(state),
        captchaURL: getCaptchaURLSelector(state)
    }
}

export default connect(mapStateToProps, { logInThunkCreator })(LoginModalWindowFormContainer);