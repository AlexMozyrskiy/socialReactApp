import { userInfoAPI } from "../../DAL/userInfo/api";
import {
    setNotOwnerUserStatusIntoState,
    setNotOwnerUserInfoIntoState
} from "./actionCreators";
import { setIsHeaderSearchButtonClicked } from "../header/actionCreators";

export const notOwnerUserProfileThunkCreator = (id) => async (dispatch) => {
    dispatch(setIsHeaderSearchButtonClicked(true));

    const userInfo = await userInfoAPI.getUserInfo(id);

    if (userInfo) {
        dispatch(setNotOwnerUserInfoIntoState(userInfo));

        const status = await userInfoAPI.getUserStatus(id);
        if(status) {
            dispatch(setNotOwnerUserStatusIntoState(status));
        }
    }
    dispatch(setIsHeaderSearchButtonClicked(false));
}