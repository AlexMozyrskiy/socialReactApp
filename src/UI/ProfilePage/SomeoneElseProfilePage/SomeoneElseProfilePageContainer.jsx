import React, { useEffect } from "react";
import SomeoneElseProfilePage from "./SomeoneElseProfilePage";
import { notOwnerUserProfileThunkCreator } from "../../../BLL/notOwnerUserData/thunkCreators";
import { connect } from "react-redux";
import * as selectors from "../../../BLL/notOwnerUserData/selectors";

const SomeoneElseProfilePageContainer = (props) => {

    useEffect( () => {
        props.notOwnerUserProfileThunkCreator(props.userId);
    }, [props.userId] );            // userId пришло из ProfilePageContainer из адресной строки

    const contactsKeysArray = Object.keys(props.contacts);

    return (
        <SomeoneElseProfilePage
            status={props.status}
            fullName={props.fullName}
            smallPhoto={props.smallPhoto}
            largePhoto={props.largePhoto}
            lookingForAJob={props.lookingForAJob}
            lookingForAJobDescription={props.lookingForAJobDescription}
            aboutMe={props.aboutMe}
            contacts={props.contacts}
            contactsKeysArray={contactsKeysArray}
        />
    );
}



const mapStateToProps = (state) => {
    return {
        status: selectors.getNotOwnerStatusSelector(state),
        fullName: selectors.getNotOwnerFullNameSelector(state),
        smallPhoto: selectors.getNotOwnerSmallPhotoSelector(state),
        largePhoto: selectors.getNotOwnerLargePhotoSelector(state),
        lookingForAJob: selectors.getNotOwnerLookingForAJobSelector(state),
        lookingForAJobDescription: selectors.getNotOwnerLookingForAJobDescriptionSelector(state),
        aboutMe: selectors.getNotOwnerAboutMeSelector(state),
        contacts: selectors.getNotOwnerContactsSelector(state)
    }
}

const mapDispatchToProps = {
    notOwnerUserProfileThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(SomeoneElseProfilePageContainer);