import React from "react";
import SideBarNavContainer from "./SideBarNav/SideBarNavContainer";
import SideBarUserInfoContainer from "./SideBarUserInfo/SideBarUserInfoContainer";

const SideBar = () => {
    return (
        <div className="grid-wrapper__sidebar-left sidebar-left">
            
            <SideBarUserInfoContainer />

            <SideBarNavContainer />

        </div>
    );
}

export default SideBar;