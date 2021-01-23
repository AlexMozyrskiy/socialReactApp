export const getUsersArraySelector =  (state) => {
    return state.users.items;
}

export const getTotalUsersCountSelector =  (state) => {
    return state.users.totalCount;
}

export const getUsersErrorSelector =  (state) => {
    return state.users.error;
}

export const getUsersCurrentPageSelector =  (state) => {
    return state.users.currentPage;
}

export const getIsPreloaderActiveSelector =  (state) => {
    return state.users.isPreloaderActive;
}

export const getIdClickedFollowButtonsArray =  (state) => {
    return state.users.clickedButtonsIds;
}

export const getRunUseEffect =  (state) => {
    return state.users.runUseEffectInUsersPageContainer;
}