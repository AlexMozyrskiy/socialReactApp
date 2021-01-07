import { isAuthThunkCreator } from "../authUserData/thunkCreators";
import { initializedApp } from "./actionCreators";

export const initializedAppThunkCreator = () => (dispatch) => {
    const authThunkCreatorResult = dispatch(isAuthThunkCreator());

    Promise.all([authThunkCreatorResult])
        .then(() => {
            dispatch(initializedApp(true));
        });
}