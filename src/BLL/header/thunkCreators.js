import { setIsHeaderLoginButtonClicked } from "./actionCreators";
import { loginAPI } from "./../../DAL/login/api";
import { setUserData } from "../authUserData/actionCreators";

export const logOutThunkCreator = (email, password, rememberMe = false, captcha = false) => async (dispatch) => {
    dispatch(setIsHeaderLoginButtonClicked(true));

    const data = await loginAPI.logOut();

    if (data.resultCode === 0) {            // если пользователь залогинен
        dispatch(setUserData({ userId: null, userLogin: "", userEmail: "", isUserLoggedIn:false }));
        dispatch(setIsHeaderLoginButtonClicked(false));
    } else {
        alert("Some Error");
    }
}