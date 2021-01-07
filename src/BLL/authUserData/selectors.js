export const getIsLoggedInSelector =  (state) => {
    return state.userData.isLoggedIn;
}

export const getOwnerStatusSelector =  (state) => {
    return state.userData.status;
}

export const getOwnerFullNameSelector =  (state) => {
    return state.userData.fullName;
}

export const getOwnerSmallPhotoSelector =  (state) => {
    return state.userData.photos.small;
}

export const getOwnerLargePhotoSelector =  (state) => {
    return state.userData.photos.large;
}