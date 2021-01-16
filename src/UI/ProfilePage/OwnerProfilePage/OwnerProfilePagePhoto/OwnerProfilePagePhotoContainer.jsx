import React from "react";
import OwnerProfilePagePhoto from "./OwnerProfilePagePhoto";
import { getOwnerLargePhotoSelector } from "../../../../BLL/authUserData/selectors";
import { updateOwnerPhotoThunkCreator } from "../../../../BLL/ownerProfilePage/thunkCreators";
import { connect } from "react-redux";


const OwnerProfilePagePhotoContainer = (props) => {

    function onMainAvatarSelected(photo) {
        props.updateOwnerPhotoThunkCreator(photo);
    }

    return (
        <OwnerProfilePagePhoto
            largePhoto={props.largePhoto}
            onMainAvatarSelected={onMainAvatarSelected}
        />
    );
}


const mapStateToProps = (state) => {
    return {
        largePhoto: getOwnerLargePhotoSelector(state)
    }
}

export default connect(mapStateToProps, { updateOwnerPhotoThunkCreator })(OwnerProfilePagePhotoContainer);