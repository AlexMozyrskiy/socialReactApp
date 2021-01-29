import { setIsHeaderLoginButtonClicked } from "./actionCreators";
import { loginAPI } from "./../../DAL/login/api";
import { setUserData, setUserInfoIntoState, setUserStatusIntoState, setRunUseEffectAppComponent } from "../authUserData/actionCreators";
import { initializedApp } from "../initializedApp/actionCreators";

export const logOutThunkCreator = (/* email, password, rememberMe = false, captcha = false */) => async (dispatch) => {
    dispatch(setIsHeaderLoginButtonClicked(true));
    
    dispatch(initializedApp(false));

    const data = await loginAPI.logOut();

    if (data.resultCode === 0) {            // если пользователь вылогинелся
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
        dispatch(setIsHeaderLoginButtonClicked(false));
    }
}