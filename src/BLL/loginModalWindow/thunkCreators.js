import {
    setIsModalLoginWindowActive, setIsModalLoginWindowButtonClicked,
    setCaptchaIntoState
} from "./actionCreators";
import { setIsHeaderLoginButtonClicked } from "../../BLL/header/actionCreators";
import { loginAPI } from "./../../DAL/login/api";
import { setResponseErrorTextIntoState } from "./../loginModalWindow/actionCreators";
import { initializedAppThunkCreator } from "../initializedApp/thunkCreators";



export const logInThunkCreator = (email, password, rememberMe = false, captcha = false) => async (dispatch) => {
    dispatch(setIsModalLoginWindowButtonClicked(true));

    const data = await loginAPI.logIn(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {            // если пользователь залогинен
        dispatch(initializedAppThunkCreator());
        dispatch(setIsModalLoginWindowActive(false));
        dispatch(setIsHeaderLoginButtonClicked(false));
        dispatch(setCaptchaIntoState(false, null));
    } else if (data.resultCode === 10) {             // captcha
        loginAPI.getCaptcha()
            .then(captchaURL => {
                dispatch(setCaptchaIntoState(true, captchaURL));
            })
    } else if(data.resultCode === 1) {
        const responseErrorText =  data.messages[0];
        dispatch(setResponseErrorTextIntoState(responseErrorText));
    } else {
        alert("Some Error");
    }

    dispatch(setIsModalLoginWindowButtonClicked(false));
}