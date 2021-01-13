import React from "react";
import { Field, reduxForm } from "redux-form";
import cn from "classnames";
import ButtonPreloader from "../../common/ButtonPreloader";

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
            <ButtonPreloader displayNone={!props.isLoginButtonClicked} dotsCount={3} classes={["loader", "loader_loginWindow-loginbutton"]} />
        </form>
    );
}

export default reduxForm({
    // a uniq name for the form
    form: "login"
})
(LoginModalWindowForm);