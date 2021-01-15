import { userInfoAPI } from "../../DAL/userInfo/api";
import {
    setNotOwnerUserStatusIntoState,
    setNotOwnerUserInfoIntoState
} from "./actionCreators";

export const notOwnerUserProfileThunkCreator = (id) => async (dispatch) => {
    const userInfo = await userInfoAPI.getUserInfoForProfilePage(id);

    if (userInfo) {
        dispatch(setNotOwnerUserInfoIntoState(userInfo));

        const status = await userInfoAPI.getUserStatus(id);
        if(status) {
            dispatch(setNotOwnerUserStatusIntoState(status));
        }
    }
}