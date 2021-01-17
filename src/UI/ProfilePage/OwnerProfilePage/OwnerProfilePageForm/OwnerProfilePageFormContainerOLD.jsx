import React from "react";
import { connect } from "react-redux";
import OwnerProfilePageForm from "./OwnerProfilePageForm";
import * as selectors from "../../../../BLL/authUserData/selectors";
import { getOwnerProfilePageIsSaveChangesButtonClickedSelector } from "../../../../BLL/ownerProfilePage/selectors";
import { updateOwnerStatusThunkCreator, updateOwnerInfoThunkCreator } from "../../../../BLL/ownerProfilePage/thunkCreators";
import { toogleLoockingForAJobInState } from "../../../../BLL/authUserData/actionCreators";

const OwnerProfilePageFormContainer = (props) => {

    const contactsKeysArray = Object.keys(props.contacts);      // записываем в массив ключи объекта props.contacts, чтобы потом удобнос ними работать  через mapcontactsKeysArray

    function onSubmit(formData) {
        // тут действия которые выполнятся при сабмите формы

        // ------------- Status -------------------
        const prevStatus = props.status;
        const newStatus = formData.status;
        if (!newStatus) {      // если пустой статус
            formData.status = null;
        }

        if (prevStatus !== newStatus && formData.status) {                   // если статус не такой же как был обновим его
            props.updateOwnerStatusThunkCreator(formData.status);
        }
        // ------------- / Status -----------------


        // --------------- Info -------------------
        if (!("fullName" in formData)) formData.fullName = props.fullName;
        if (!("aboutMe" in formData)) formData.aboutMe = props.aboutMe;
        if (!("lookingForAJob" in formData)) formData.lookingForAJob = props.lookingForAJob;
        if (!("lookingForAJobDescription" in formData)) formData.lookingForAJobDescription = props.lookingForAJobDescription;

        // --------------- / Info -----------------

        // ------------- Определим объект для санки ----------------
        const ownerInfoObj = {
            aboutMe: formData.aboutMe,
            lookingForAJob: formData.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            fullName: formData.fullName,
            contacts: {

            },
            photos: {
                small: props.smallPhoto,
                large: props.largePhoto
            }
        }
        // ------------- / Определим объект для санки --------------

        // --------------- Contacts -------------------
        for (let key in props.contacts) {
            if (!(key in formData)) {
                ownerInfoObj.contacts[key] = props.contacts[key];
            } else {
                ownerInfoObj.contacts[key] = formData[key]
            }
        }
        // --------------- / Contacts -----------------
        console.log(ownerInfoObj);

        props.updateOwnerInfoThunkCreator(ownerInfoObj);
    }

    function toogleCheckBoxlookingForAJob(isLooking) {
        console.log(isLooking);
        props.toogleLoockingForAJobInState(isLooking);
    }



    if (props.isLoggedIn && props.userIdFromUrl == props.ownerId) {
        return (
            <OwnerProfilePageForm
                {...props}
                contactsKeysArray={contactsKeysArray}
                onSubmit={onSubmit}
                toogleCheckBoxlookingForAJob={toogleCheckBoxlookingForAJob}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: selectors.getIsLoggedInSelector(state),
        ownerId: selectors.getOwnerIdSelector(state),
        status: selectors.getOwnerStatusSelector(state),
        fullName: selectors.getOwnerFullNameSelector(state),
        smallPhoto: selectors.getOwnerSmallPhotoSelector(state),
        largePhoto: selectors.getOwnerLargePhotoSelector(state),
        lookingForAJob: selectors.getOwnerLookingForAJobSelector(state),
        lookingForAJobDescription: selectors.getOwnerLookingForAJobDescriptionSelector(state),
        aboutMe: selectors.getOwnerAboutMeSelector(state),
        contacts: selectors.getOwnerContactsSelector(state),
        isSaveChangesButtonClicked: getOwnerProfilePageIsSaveChangesButtonClickedSelector(state),
        updateOwnerStatusThunkCreator: updateOwnerStatusThunkCreator,
        updateOwnerInfoThunkCreator: updateOwnerInfoThunkCreator
    }
}

const mapDispatchToProps = {
    updateOwnerStatusThunkCreator,
    updateOwnerInfoThunkCreator,
    toogleLoockingForAJobInState
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfilePageFormContainer);