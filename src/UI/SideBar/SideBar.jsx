import React from "react";
import SideBarNav from "./SideBarNav/SideBarNav";
import SideBarUserInfoContainer from "./SideBarUserInfo/SideBarUserInfoContainer";

const SideBar = () => {
    return (
        <div class="grid-wrapper__sidebar-left sidebar-left">
            
            <SideBarUserInfoContainer />

            <SideBarNav />

        </div>
    );
}

export default SideBar;