import { LOGGED_IN_OUT_USER_DATA } from "./actionTypes";

const initialState = {
    id: null,
    login: "",
    email: "",
    isLoggedIn: false 
};

const authUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN_OUT_USER_DATA: {
            const superState = {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isLoggedIn: action.isLoggedIn
            };
            return superState;
        }
        default: return state;
    }
};

export default authUserDataReducer;