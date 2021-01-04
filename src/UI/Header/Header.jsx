import React from "react";
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
                
                <button className="button">
                    Log In
                </button>
                <div className="loader loader_header-loginbutton displaynone">
                    <div id="fountainG_1" className="fountainG"></div>
                    <div id="fountainG_2" className="fountainG"></div>
                    <div id="fountainG_3" className="fountainG"></div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;