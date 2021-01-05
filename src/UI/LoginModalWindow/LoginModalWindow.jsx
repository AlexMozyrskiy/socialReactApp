import React from "react";
import cn from "classnames";
import LoginModalWindowFormContainer from "./LoginModalWindowForm/LoginModalWindowFormContainer";

const LoginModalWindow = (props) => {
    return (
        <div className={ cn("login", {"login__deactivate": !props.isModalLoginWindowAcive}, {"login__activate": props.isModalLoginWindowAcive}) }>

            <div className="login__wrapper">
                <div className="login__cross" onClick={ () => props.toogleIsModalLoginWindowAcive(false) }>
                    <span></span>
                    <span></span>
                </div>
                <div className="login__logo-and-title">
                    <img src="#" alt="logo" className="login__logo" />
                    <h2 className="login__title">JS Friend Finder</h2>
                </div>

                <h3 className="login__subtitle">Find JS Friends</h3>

                <div className="login__form-wrapper">
                    <p className="login__sign-in">Sign in now and meet awesome peaple around the Java Script</p>

                    <LoginModalWindowFormContainer />
                    
                </div>


            </div>
        </div>
    );
}

export default LoginModalWindow;