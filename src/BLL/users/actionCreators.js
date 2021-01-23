import {
    SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE,
    IS_PRELOADER_ACTIVE_INTO_STATE, TOOGLE_FOLLOW_USER,
    SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE
} from "./actionTypes";

export const setUsersArray = (usersArray, totalCount, error) => {
    return {
        type: SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE,
        usersArray: [...usersArray],
        totalCount: totalCount,
        error: error
    }
};

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE_INTO_STATE, currentPage});

export const setIsPreloaderActive = (isActive) => ({type: IS_PRELOADER_ACTIVE_INTO_STATE, isActive});

export const followUser = (userId, isFollow) => ({type: TOOGLE_FOLLOW_USER, userId, isFollow});

export const setClickedButtonId = (userId) => ({type: SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, userId});        // чтобы показывать лоадер вместо кнопки

export const unSetClickedButtonId = (userId) => ({type: UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, userId});   // чтобы показывать кнопку вместо лоадера