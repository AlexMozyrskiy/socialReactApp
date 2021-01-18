import React from "react";
import cn from "classnames";
import ButtonPreloader from "../../common/ButtonPreloader";
import InputReactHookForm from "../../common/InputReactHookForm";


const LoginModalWindowForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className="login__form">
            <InputReactHookForm
                CSSclasses={["login__form-input"]}
                type="text"
                register={props.register}
                name="email"
                errors={props.errors.email}
                minLength={3}
                required={true}
                placeholder={"Enter your Email"}
            />
            <InputReactHookForm
                CSSclasses={["login__form-input"]}
                type="password"
                register={props.register}
                name="password"
                errors={props.errors.password}
                minLength={3}
                required={true}
                placeholder={"Enter your Password"}
            />
            <input name="rememberMe" ref={props.register} type="checkbox" className="login__form-input" /><span>Remember Me</span>
            {
                props.isCapthaActive
                    ? <><img src={props.captchaURL} alt="captcha" className="login__captcha" />
                        <InputReactHookForm
                            CSSclasses={["login__form-input"]}
                            type="text"
                            register={props.register}
                            name="captcha"
                            errors={props.errors.captcha}
                            minLength={3}
                            required={true}
                            placeholder={"Enter symbols"}
                        />
                    </>
                    : null
            }
            <button className={cn("button", "button_login", { "displaynone": props.isLoginButtonClicked })}>Sign In</button>
            <ButtonPreloader displayNone={!props.isLoginButtonClicked} dotsCount={3} classes={["loader", "loader_loginWindow-loginbutton"]} />
        </form>
    );
}

export default LoginModalWindowForm;