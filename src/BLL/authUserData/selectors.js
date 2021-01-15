export const getIsLoggedInSelector =  (state) => {
    return state.authUserData.isLoggedIn;
}

export const getOwnerStatusSelector =  (state) => {
    return state.authUserData.status;
}

export const getOwnerFullNameSelector =  (state) => {
    return state.authUserData.fullName;
}

export const getOwnerSmallPhotoSelector =  (state) => {
    return state.authUserData.photos.small;
}

export const getOwnerLargePhotoSelector =  (state) => {
    return state.authUserData.photos.large;
}

export const getOwnerIdSelector =  (state) => {
    return state.authUserData.id;
}

export const getOwnerLookingForAJobSelector =  (state) => {
    return state.authUserData.lookingForAJob;
}

export const getOwnerLookingForAJobDescriptionSelector =  (state) => {
    return state.authUserData.lookingForAJobDescription;
}

export const getOwnerAboutMeSelector =  (state) => {
    return state.authUserData.aboutMe;
}

export const getOwnerContactsSelector =  (state) => {
    return state.authUserData.contacts;
}