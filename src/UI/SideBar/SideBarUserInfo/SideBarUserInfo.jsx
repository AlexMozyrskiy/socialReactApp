import React from "react";

const SideBarUserInfo = (props) => {
    return (
        <div className="sidebar-left__user-info-wrapper">
            <div className="sidebar-left__user-photo">
                {props.isLoggedIn ? <img src={ props.ownerSmallPhoto } alt="User" className="sidebar-left__user-photo-img" /> : null}
            </div>
            <div className="sidebar-left__user-nameandstatus">
                <h2 className="sidebar-left__user-name">{ props.isLoggedIn ? props.ownerFullName : null }</h2>
                <p className="sidebar-left__user-status">{ props.isLoggedIn ? props.ownerStatus : null }</p>
            </div>
        </div>
    );
}

export default SideBarUserInfo;