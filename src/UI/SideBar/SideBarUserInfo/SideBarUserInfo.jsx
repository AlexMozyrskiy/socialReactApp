import React from "react";

const SideBarUserInfo = () => {
    return (
        <div className="sidebar-left__user-info-wrapper">
            <div className="sidebar-left__user-photo">
                <img src="./img/mask.jpg" alt="User" className="sidebar-left__user-photo-img" />
            </div>
            <div className="sidebar-left__user-nameandstatus">
                <h2 className="sidebar-left__user-name">Some User Name</h2>
                <p className="sidebar-left__user-status">Some User Status</p>
            </div>
        </div>
    );
}

export default SideBarUserInfo;