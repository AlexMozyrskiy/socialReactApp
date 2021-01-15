import React from "react";
import OwnerProfilePagePhoto from "./OwnerProfilePagePhoto";
import { getOwnerLargePhotoSelector } from "../../../../BLL/authUserData/selectors";
import { connect } from "react-redux";


const OwnerProfilePagePhotoContainer = (props) => {

    return (
        <OwnerProfilePagePhoto largePhoto={props.largePhoto} />
    );
}


const mapStateToProps = (state) => {
    return {
        largePhoto: getOwnerLargePhotoSelector(state)
    }
}

export default connect(mapStateToProps, {  })(OwnerProfilePagePhotoContainer);