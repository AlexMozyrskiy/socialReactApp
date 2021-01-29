import { isAuthThunkCreator } from "../authUserData/thunkCreators";
import { setRunUseEffectAppComponent } from "../authUserData/actionCreators";
import { initializedApp } from "./actionCreators";

export const initializedAppThunkCreator = () => (dispatch) => {
    const authThunkCreatorResult = dispatch(isAuthThunkCreator());

    Promise.all([authThunkCreatorResult])
        .then(() => {
            dispatch(initializedApp(true));
        });
}