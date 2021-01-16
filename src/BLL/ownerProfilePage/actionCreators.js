import {
    IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED,
    IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED
} from "./actionTypes";

export const isOwnerProfilePageSaveChangesButtonClicked = (isClicked) => ({ type: IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED, isClicked });
export const isOwnerProfilePageUpdatePhotoButtonClicked = (isClicked) => ({ type: IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED, isClicked });