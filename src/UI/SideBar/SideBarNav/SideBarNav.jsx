import React from "react";
import { NavLink } from "react-router-dom";

const SideBarNav = (props) => {
    return (
        <nav className="sidebar-left__nav">
            <ul className="sidebar-left__ul">
                <li className="sidebar-left__li"><NavLink to="/users" className="sidebar-left__a">People Nearby</NavLink></li>
                <li className="sidebar-left__li"><NavLink to={"/profile/" + props.ownerId} className="sidebar-left__a">My Profile</NavLink></li>
                <li className="sidebar-left__li"><NavLink to="/messages" className="sidebar-left__a">Messages</NavLink></li>
            </ul>
        </nav>
    );
}

export default SideBarNav;