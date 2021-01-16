import { userInfoAPI } from "../../DAL/userInfo/api";
import {
    isOwnerProfilePageSaveChangesButtonClicked,
    isOwnerProfilePageUpdatePhotoButtonClicked
} from "./actionCreators";
import { setUserStatusIntoState, setUserInfoIntoState } from "../authUserData/actionCreators";
import { setUserPhotosIntoState } from "../authUserData/actionCreators";

export const updateOwnerStatusThunkCreator = (status) => async (dispatch) => {
    dispatch(isOwnerProfilePageSaveChangesButtonClicked(true));

    const response = await userInfoAPI.updateOwnerStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatusIntoState(status));
        dispatch(isOwnerProfilePageSaveChangesButtonClicked(false));
    } else {
        dispatch(isOwnerProfilePageSaveChangesButtonClicked(false));
        alert("Some Error");
    }
}

export const updateOwnerInfoThunkCreator = (ownerInfoObj) => async (dispatch) => {
    dispatch(isOwnerProfilePageSaveChangesButtonClicked(true));

    const response = await userInfoAPI.updateOwnerInfo(ownerInfoObj);

    if (response.data.resultCode === 0) {
        dispatch(setUserInfoIntoState(ownerInfoObj));
        dispatch(isOwnerProfilePageSaveChangesButtonClicked(false));
    } else {
        dispatch(isOwnerProfilePageSaveChangesButtonClicked(false));
        alert("Some Error");
    }
}

export const updateOwnerPhotoThunkCreator = (photo) => async (dispatch) => {
    dispatch(isOwnerProfilePageUpdatePhotoButtonClicked(true));

    const response = await userInfoAPI.updateOwnerPhoto(photo);

    if (response.data.resultCode === 0) {
        const photos = {
            small: response.data.data.photos.small,
            large: response.data.data.photos.large
        }

        dispatch(setUserPhotosIntoState(photos));
        dispatch(isOwnerProfilePageUpdatePhotoButtonClicked(false));
    } else {
        dispatch(isOwnerProfilePageUpdatePhotoButtonClicked(false));
        alert("Some Error");
    }
}