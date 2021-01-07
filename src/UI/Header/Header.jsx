import React from "react";
import HeaderLoginButtonContainer from "./HeaderLoginButton/HeaderLoginButtonContainer";
import HeaderNavContainer from "./HeaderNav/HeaderNavContainer";
import HeaderUserSearchFormContainer from "./HeaderUserSearch/HeaderUserSearchFormContainer";

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__flex-wrapper">

                    <div className="header__logo-and-title">
                        <img src="#" alt="logo" className="header__logo" />
                        <h2 className="header__title">JS Friend Finder</h2>
                    </div>

                    <HeaderUserSearchFormContainer />

                    <HeaderNavContainer />

                    <HeaderLoginButtonContainer />

                </div>
            </div>
        </header>
    );
}

export default Header;