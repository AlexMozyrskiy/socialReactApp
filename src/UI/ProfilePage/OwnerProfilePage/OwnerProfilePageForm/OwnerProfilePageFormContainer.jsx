import React from "react";
import { connect } from "react-redux";
import OwnerProfilePageForm from "./OwnerProfilePageForm";
import * as selectors from "../../../../BLL/authUserData/selectors"

const OwnerProfilePageFormContainer = (props) => {

    const contactsKeysArray = Object.keys(props.contacts);

    return (
        <OwnerProfilePageForm
            {...props}
            contactsKeysArray={contactsKeysArray}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        status: selectors.getOwnerStatusSelector(state),
        fullName: selectors.getOwnerFullNameSelector(state),
        smallPhoto: selectors.getOwnerSmallPhotoSelector(state),
        largePhoto: selectors.getOwnerLargePhotoSelector(state),
        lookingForAJob: selectors.getOwnerLookingForAJobSelector(state),
        lookingForAJobDescription: selectors.getOwnerLookingForAJobDescriptionSelector(state),
        aboutMe: selectors.getOwnerAboutMeSelector(state),
        contacts: selectors.getOwnerContactsSelector(state)
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfilePageFormContainer);