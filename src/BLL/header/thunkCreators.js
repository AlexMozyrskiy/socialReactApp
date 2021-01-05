import { setIsModalLoginWindowActive, setIsLoginButtonClicked } from "./actionCreators";
import { loginAPI } from "./../../DAL/login/api";
import { isAuthThunkCreator } from "./../authUserData/thunkCreators";


export const loginThunkCreator = (email, password, rememberMe = false, captcha = false) => async (dispatch) => {
    dispatch(setIsLoginButtonClicked(true));

    const data = await loginAPI.logIn(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {            // если пользователь залогинен
        dispatch(isAuthThunkCreator());
        dispatch(setIsModalLoginWindowActive(false));
    } else {
        alert("Some Error");
    }

    dispatch(setIsLoginButtonClicked(false));
}