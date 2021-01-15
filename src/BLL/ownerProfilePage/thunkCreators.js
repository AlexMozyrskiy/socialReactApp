import { userInfoAPI } from "../../DAL/userInfo/api";
import {
    isOwnerProfilePageSaveChangesButtonClicked
} from "./actionCreators";
import { setUserStatusIntoState } from "../authUserData/actionCreators";

export const updateOwnerStatusThunkCreator = (status) => async (dispatch) => {
    dispatch(isOwnerProfilePageSaveChangesButtonClicked(true));

    const response = await userInfoAPI.updateOwnerStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUserStatusIntoState(status));
        dispatch(isOwnerProfilePageSaveChangesButtonClicked(false));
    } else {
        dispatch(isOwnerProfilePageSaveChangesButtonClicked(false));
        alert("Some Error");
    }
}