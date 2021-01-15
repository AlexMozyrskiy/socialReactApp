import { userInfoAPI } from "../../DAL/userInfo/api";
import { loginAPI } from "../../DAL/login/api";
import {
    setUserData, setUserStatusIntoState,
    setUserInfoIntoState
} from "./actionCreators";

export const isAuthThunkCreator = () => async (dispatch) => {
    const data = await loginAPI.isAuth();

    if (data.resultCode === 0) {            // если пользователь залогинен
        const userData = { userId: data.data.id, userLogin: data.data.login, userEmail: data.data.email, isUserLoggedIn: true }  // 1. задиспатчим первоначальные данные(которые приходят с ответом от сервера) в стейт
        dispatch(setUserData(userData));

        const status = await userInfoAPI.getUserStatus(data.data.id);
        if(status) {
            dispatch(setUserStatusIntoState(status));
        }

        const userInfo = await userInfoAPI.getUserInfo(data.data.id);
        if(userInfo) {
            dispatch(setUserInfoIntoState(userInfo));
        }
    }
}