import { IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED, IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED } from "./actionTypes";

const initialState = {
    isSaveChangesButtonClicked: false,
    isUpdatePhotoButtonClicked: false
};

const ownerProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_OWNER_PROFILE_PAGE_SAVE_CHANGES_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isSaveChangesButtonClicked: action.isClicked
            };
            return superState;
        }

        case IS_OWNER_PROFILE_PAGE_UPDATE_PHOTO_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isUpdatePhotoButtonClicked: action.isClicked
            };
            return superState;
        }

        
        default: return state;
    }
};

export default ownerProfilePageReducer;