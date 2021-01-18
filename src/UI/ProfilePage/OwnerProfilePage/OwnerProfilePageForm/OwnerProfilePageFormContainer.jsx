import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import OwnerProfilePageForm from "./OwnerProfilePageForm";
import * as selectors from "../../../../BLL/authUserData/selectors";
import { getOwnerProfilePageIsSaveChangesButtonClickedSelector } from "../../../../BLL/ownerProfilePage/selectors";
import { updateOwnerStatusThunkCreator, updateOwnerInfoThunkCreator } from "../../../../BLL/ownerProfilePage/thunkCreators";
import { toogleLoockingForAJobInState } from "../../../../BLL/authUserData/actionCreators";

const OwnerProfilePageFormContainer = (props) => {

    const contactsKeysArray = Object.keys(props.contacts);      // записываем в массив ключи объекта props.contacts, чтобы потом удобнос ними работать  через mapcontactsKeysArray

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            status: props.status ? props.status : null,
            fullName: props.fullName ? props.fullName : null,
            aboutMe: props.aboutMe ? props.aboutMe : null,
            lookingForAJobDescription: props.lookingForAJobDescription ? props.lookingForAJobDescription : null,
            facebook: props.contacts.facebook ? props.contacts.facebook : null,
            github: props.contacts.github ? props.contacts.github : null,
            instagram: props.contacts.instagram ? props.contacts.instagram : null,
            mainLink: props.contacts.mainLink ? props.contacts.mainLink : null,
            twitter: props.contacts.twitter ? props.contacts.twitter : null,
            vk: props.contacts.vk ? props.contacts.vk : null,
            website: props.contacts.website ? props.contacts.website : null,
            youtube: props.contacts.youtube ? props.contacts.youtube : null
        }
    });

    function onSubmit(formData) {
        // тут действия которые выполнятся при сабмите формы
        const ownerInfoObj = {
            status: formData.status ? formData.status : null,
            fullName: formData.fullName ? formData.fullName : null,
            aboutMe: formData.aboutMe ? formData.aboutMe : null,
            lookingForAJob: formData.lookingForAJob ? formData.lookingForAJob : null,
            lookingForAJobDescription: formData.lookingForAJobDescription ? formData.lookingForAJobDescription : null,
            contacts: {
                facebook: formData.facebook ? formData.facebook : null,
                github: formData.github ? formData.github : null,
                instagram: formData.instagram ? formData.instagram : null,
                mainLink: formData.mainLink ? formData.mainLink : null,
                twitter: formData.twitter ? formData.twitter : null,
                vk: formData.vk ? formData.vk : null,
                website: formData.website ? formData.website : null,
                youtube: formData.youtube ? formData.youtube : null
            },
            photos: {
                small: props.smallPhoto ? props.smallPhoto : null,
                large: props.largePhoto ? props.largePhoto : null
            }
        }

        if(ownerInfoObj.status != props.status) {
            props.updateOwnerStatusThunkCreator(ownerInfoObj.status)
        }

        props.updateOwnerInfoThunkCreator(ownerInfoObj);
    }

    if (props.isLoggedIn && props.userIdFromUrl == props.ownerId) {
        return (
            <OwnerProfilePageForm
                {...props}
                contactsKeysArray={contactsKeysArray}
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
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