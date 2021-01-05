import { LOGGED_IN_OUT_USER_DATA } from "./actionTypes";

export const setUserData = ({ userId, userLogin, userEmail, isUserLoggedIn }) => {
    return {
        type: LOGGED_IN_OUT_USER_DATA,
        id: userId,
        login: userLogin,
        email: userEmail,
        isLoggedIn: isUserLoggedIn
    }
};