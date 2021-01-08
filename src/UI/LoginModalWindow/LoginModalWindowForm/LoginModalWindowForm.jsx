import React from "react";
import { Field, reduxForm } from "redux-form";
import cn from "classnames";

const LoginModalWindowForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="login__form">
            <Field component="input" name="email" type="text" className="login__form-input" placeholder="Enter your Email" />
            <Field component="input" name="password" type="password" className="login__form-input" placeholder="Enter your Password" />
            <Field component="input" name="rememberMe" type="checkbox" className="login__form-input" /><span>Remember Me</span>
            {
                props.isCapthaActive
                ? <><img src={props.captchaURL} alt="captcha" className="login__captcha" />
                <Field component="input" name="captcha" type="text" className="login__form-input" placeholder="Enter symbols" /></>
                : null
            }
            <button className={cn("button", "button_login", {"displaynone": props.isLoginButtonClicked})}>Sign In</button>
            <div className={cn("loader", "loader_loginWindow-loginbutton", {"displaynone": !props.isLoginButtonClicked})}>
                <div id="fountainG_1" className="fountainG"></div>
                <div id="fountainG_2" className="fountainG"></div>
                <div id="fountainG_3" className="fountainG"></div>
            </div>
        </form>
    );
}

export default reduxForm({
    // a uniq name for the form
    form: "login"
})
(LoginModalWindowForm);