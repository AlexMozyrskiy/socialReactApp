import React from "react";
import cn from "classnames";

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

                    <form action="#" className="login__form">
                        <input type="text" className="login__form-input" placeholder="Enter your Email" />
                        <input type="password" className="login__form-input" placeholder="Enter your Password" />
                        {/* <img src="./img/mask.jpg" alt="captcha" className="login__captcha">
                        <input type="text" className="login__form-input" placeholder="Enter symbols" /> */}
                        <button className="button button_login">Sign In</button>
                        <div className="loader loader_loginWindow-loginbutton displaynone">
                            <div id="fountainG_1" className="fountainG"></div>
                            <div id="fountainG_2" className="fountainG"></div>
                            <div id="fountainG_3" className="fountainG"></div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}

export default LoginModalWindow;