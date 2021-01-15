export const getNotOwnerStatusSelector =  (state) => {
    return state.notOwnerUserData.status;
}

export const getNotOwnerFullNameSelector =  (state) => {
    return state.notOwnerUserData.fullName;
}

export const getNotOwnerSmallPhotoSelector =  (state) => {
    return state.notOwnerUserData.photos.small;
}

export const getNotOwnerLargePhotoSelector =  (state) => {
    return state.notOwnerUserData.photos.large;
}

export const getNotOwnerIdSelector =  (state) => {
    return state.notOwnerUserData.id;
}

export const getNotOwnerLookingForAJobSelector =  (state) => {
    return state.notOwnerUserData.lookingForAJob;
}

export const getNotOwnerLookingForAJobDescriptionSelector =  (state) => {
    return state.notOwnerUserData.lookingForAJobDescription;
}

export const getNotOwnerAboutMeSelector =  (state) => {
    return state.notOwnerUserData.aboutMe;
}

export const getNotOwnerContactsSelector =  (state) => {
    return state.notOwnerUserData.contacts;
}