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
                onChangeOwnFunction={props.deleteErrorMessage}
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
                onChangeOwnFunction={props.deleteErrorMessage}
            />
            <input name="rememberMe" ref={props.register} type="checkbox" className="login__form-input" /><span>Remember Me</span>

            {/* Если с сервера пришла капча */}
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
            {/* / Если с сервера пришла капча */}

            {/* Если с сервера пришел ответ о неправильном паролде или логине */}
            {props.responseErrorTextFromServer
                ? <p className="animate__animated animate__lightSpeedInRight error__message" >{ props.responseErrorTextFromServer }</p>
                : null }
            {/* / Если с сервера пришел ответ о неправильном паролде или логине */}
            
            <button className={cn("button", "button_login", { "displaynone": props.isLoginButtonClicked })}>Sign In</button>
            <ButtonPreloader displayNone={!props.isLoginButtonClicked} dotsCount={3} classes={["loader", "loader_loginWindow-loginbutton"]} />
        </form>
    );
}

export default LoginModalWindowForm;