import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { compose } from "redux";

let reducers = combineReducers({
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
  ));                                       // это для использования extension'а redux dev tools в Google Chrome

// const store = createStore(reducers, applyMiddleware(thunkMiddleWare));       // это включим когда будеи деплоить проект а прошлый стор закоментируем

export default store;