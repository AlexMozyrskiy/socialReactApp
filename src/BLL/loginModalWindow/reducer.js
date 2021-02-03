import {
    IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    SET_CAPTCHA_INTO_STATE, SET_RESPONSE_ERROR_TEXT_INTO_STATE,
    TOOGLE_IS_LOGIN_REQUIREMENT
} from "./actionTypes";

let initialState = {
    isModalLoginWindowActive: false,
    isCapthaActive: false,
    captchaURL: null,
    isLoginButtonClicked: false,
    responseErrorText: null,
    isLoginRequirementActive: false
};

const loginModalWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_MODAL_LOGIN_WINDOW_ACTIVE: {
            const superState = {
                ...state,
                isModalLoginWindowActive: action.isModalLoginWindowActive
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

        case TOOGLE_IS_LOGIN_REQUIREMENT: {
            const superState = {
                ...state,
                isLoginRequirementActive: action.isLoginRequirementActive
            };
            return superState;
        }

        default: return state;
    }
};

export default loginModalWindowReducer;