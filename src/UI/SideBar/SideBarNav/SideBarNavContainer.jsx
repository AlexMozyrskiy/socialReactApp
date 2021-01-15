import React from "react";
import SideBarNav from "./SideBarNav";
import { getOwnerIdSelector } from "../../../BLL/authUserData/selectors";
import { connect } from "react-redux";


const SideBarNavContainer = (props) => {
    return (
        <SideBarNav ownerId={props.ownerId} />
    );
}


const mapStateToProps = (state) => {
    return {
        ownerId: getOwnerIdSelector(state)
    }
} 

export default connect(mapStateToProps, {})(SideBarNavContainer);