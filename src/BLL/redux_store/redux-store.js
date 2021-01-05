import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { compose } from "redux";
import loginModalWindowReducer from "../loginModalWindow/reducer";
import authUserDataReducer from "../authUserData/reducer";

let reducers = combineReducers({
    loginModalWindow: loginModalWindowReducer,
    userData: authUserDataReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
  ));                                       // это для использования extension'а redux dev tools в Google Chrome

export default store;