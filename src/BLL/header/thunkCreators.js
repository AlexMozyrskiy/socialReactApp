import { setIsHeaderLoginButtonClicked } from "./actionCreators";
import { loginAPI } from "./../../DAL/login/api";
import { setUserData, setUserInfoIntoState, setUserStatusIntoState } from "../authUserData/actionCreators";

export const logOutThunkCreator = (email, password, rememberMe = false, captcha = false) => async (dispatch) => {
    dispatch(setIsHeaderLoginButtonClicked(true));

    const data = await loginAPI.logOut();

    if (data.resultCode === 0) {            // если пользователь залогинен
        dispatch(setUserData({ userId: null, userLogin: "", userEmail: "", isUserLoggedIn: false }));
        dispatch(setUserStatusIntoState(null));
        dispatch(setUserInfoIntoState({
            aboutMe: null,
            lookingForAJob: null,
            lookingForAJobDescription: null,
            fullName: null,
            photos: {
                small: null,
                large: null
            },
            contacts: {
                facebook: null,
                github: null,
                instagram: null,
                mainLink: null,
                twitter: null,
                vk: null,
                website: null,
                youtube: null
            }
        }));
        dispatch(setIsHeaderLoginButtonClicked(false));
    } else {
        alert("Some Error");
    }
}