import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = (props) => {
    return (
        <nav className="header__nav">
            <ul className="header__ul">
                <li className="header__li">
                    <NavLink to="/users" className="header__anchor">People Nearby</NavLink>
                </li>
                <li className="header__li">
                    { props.isLoggedIn
                        ? <NavLink to={`/profile/${props.ownerId}`} className="header__anchor">My Profile</NavLink>
                        : <NavLink to={`/profile/2`} className="header__anchor">My Profile</NavLink>
                    }
                </li>
                <li className="header__li">
                    <NavLink to="/messages" className="header__anchor">Messages</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;