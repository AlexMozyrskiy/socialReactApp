import React from "react";
import { connect } from "react-redux";
import OwnerProfilePageForm from "./OwnerProfilePageForm";
import * as selectors from "../../../../BLL/authUserData/selectors";
import { getOwnerProfilePageIsSaveChangesButtonClickedSelector } from "../../../../BLL/ownerProfilePage/selectors";
import { updateOwnerStatusThunkCreator } from "../../../../BLL/ownerProfilePage/thunkCreators";

const OwnerProfilePageFormContainer = (props) => {

    function onSubmit(formData) {
        // тут действия которые выполнятся при сабмите формы
        console.log(formData);

        const prevStatus = props.status;
        const newStatus = formData.status;

        if(prevStatus !==newStatus) {
            props.updateOwnerStatusThunkCreator(formData.status);
        }
    }

    const contactsKeysArray = Object.keys(props.contacts);      // записываем в массив ключи объекта props.contacts, чтобы потом удобнос ними работать  через map

    if(props.isLoggedIn && props.userIdFromUrl == props.ownerId) {
        return (
            <OwnerProfilePageForm
                {...props}
                contactsKeysArray={contactsKeysArray}
                onSubmit={onSubmit}
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
        updateOwnerStatusThunkCreator: updateOwnerStatusThunkCreator
    }
}

const mapDispatchToProps = {
    updateOwnerStatusThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfilePageFormContainer);