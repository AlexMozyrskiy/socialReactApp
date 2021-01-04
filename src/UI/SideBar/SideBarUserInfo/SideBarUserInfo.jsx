import React from "react";

const SideBarUserInfo = () => {
    return (
        <div class="sidebar-left__user-info-wrapper">
            <div class="sidebar-left__user-photo">
                <img src="./img/mask.jpg" alt="User Photo" class="sidebar-left__user-photo-img" />
            </div>
            <div class="sidebar-left__user-nameandstatus">
                <h2 class="sidebar-left__user-name">Some User Name</h2>
                <p class="sidebar-left__user-status">Some User Status</p>
            </div>
        </div>
    );
}

export default SideBarUserInfo;