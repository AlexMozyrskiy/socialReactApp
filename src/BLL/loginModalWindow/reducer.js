import {
    IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    SET_CAPTCHA_INTO_STATE, SET_RESPONSE_ERROR_TEXT_INTO_STATE
} from "./actionTypes";

let initialState = {
    isModalLoginWindowAcive: false,
    isCapthaActive: false,
    captchaURL: null,
    isLoginButtonClicked: false,
    responseErrorText: null
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

        case SET_RESPONSE_ERROR_TEXT_INTO_STATE: {
            const superState = {
                ...state,
                responseErrorText: action.responseErrorText
            };
            return superState;
        }

        case SET_CAPTCHA_INTO_STATE: {
            const superState = {
                ...state,
                isCapthaActive: action.isCapthaActive,
                captchaURL: action.captchaURL
            };
            return superState;
        }

        default: return state;
    }
};

export default loginModalWindowReducer;