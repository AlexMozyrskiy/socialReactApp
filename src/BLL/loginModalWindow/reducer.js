import { IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED } from "./actionTypes";

let initialState = {
    isModalLoginWindowAcive: false,
    isCapthaActive: false,
    captchaURL: "",
    isLoginButtonClicked: false
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

        case IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isLoginButtonClicked: action.isLoginButtonClicked
            };
            return superState;
        }

        default: return state;
    }
};

export default loginModalWindowReducer;