import {
    LOGGED_IN_OUT_USER_DATA, SET_USER_STATUS_INTO_STATE,
    SET_USER_INFO_INTO_STATE
} from "./actionTypes";

export const setUserData = ({ userId, userLogin, userEmail, isUserLoggedIn }) => {
    return {
        type: LOGGED_IN_OUT_USER_DATA,
        id: userId,
        login: userLogin,
        email: userEmail,
        isLoggedIn: isUserLoggedIn
    }
};

export const setUserStatusIntoState = (userStatus) => ({ type: SET_USER_STATUS_INTO_STATE, status: userStatus });

export const setUserInfoIntoState = (userInfo) => {
    return {
        type: SET_USER_INFO_INTO_STATE,
        aboutMe: userInfo.aboutMe,
        lookingForAJob: userInfo.lookingForAJob,
        lookingForAJobDescription: userInfo.lookingForAJobDescription,
        fullName: userInfo.fullName,
        photoSmall: userInfo.photos.small,
        photoLarge: userInfo.photos.large,
        facebook: userInfo.contacts.facebook,
        github: userInfo.contacts.github,
        instagram: userInfo.contacts.instagram,
        mainLink: userInfo.contacts.mainLink,
        twitter: userInfo.contacts.twitter,
        vk: userInfo.contacts.vk,
        website: userInfo.contacts.website,
        youtube: userInfo.contacts.youtube
    }
}