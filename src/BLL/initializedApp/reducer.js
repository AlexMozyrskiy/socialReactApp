import { INITIALIZED_APP } from "./actionTypes";

const initialState = {
    isAppInitialized: false
};

const initializedAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_APP: {
            const superState = {
                ...state,
                isAppInitialized: action.isAppInitialized
            };
            return superState;
        }
        default: return state;
    }
};

export default initializedAppReducer;