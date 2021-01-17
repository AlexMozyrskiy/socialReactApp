import { IS_HEADER_LOGIN_BUTTON_CLICKED, IS_HEADER_SEARCH_BUTTON_CLICKED } from "./actionTypes";

const initialState = {
    isLoginButtonClicked: false,
    isSearchButtonClicked: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_HEADER_LOGIN_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isLoginButtonClicked: action.isLoginButtonClicked
            };
            return superState;
        }

        case IS_HEADER_SEARCH_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isSearchButtonClicked: action.isSearchButtonClicked
            };
            return superState;
        }

        default: return state;
    }
};

export default headerReducer;