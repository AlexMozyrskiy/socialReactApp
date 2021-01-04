import { IS_MODAL_LOGIN_WINDOW_ACTIVE } from "./actionTypes";

let initialState = {
    isModalLoginWindowAcive: false,
    isCapthaActive: false,
    captchaURL: ""
};

const loginModalWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_MODAL_LOGIN_WINDOW_ACTIVE: {
            const superState = {
                ...state,
                isModalLoginWindowAcive: action.isModalLoginWindowAcive
            };
            return superState;
        }
        default: return state;
    }
};

export default loginModalWindowReducer;