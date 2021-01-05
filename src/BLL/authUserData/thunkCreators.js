import { loginAPI } from "../../DAL/login/api";
import { setUserData } from "./actionCreators";
import { setIsModalLoginWindowButtonClicked } from "../loginModalWindow/actionCreators";


export const isAuthThunkCreator = () => async (dispatch) => {
    dispatch(setIsModalLoginWindowButtonClicked(true));

    const data = await loginAPI.isAuth();

    if (data.resultCode === 0) {            // если пользователь залогинен
        const userData = { userId: data.data.id, userLogin: data.data.login, userEmail: data.data.email, isUserLoggedIn: true }
        dispatch(setUserData(userData));
    }

    dispatch(setIsModalLoginWindowButtonClicked(false));
}