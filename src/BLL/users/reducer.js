import {
    SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE,
    IS_PRELOADER_ACTIVE_INTO_STATE, TOOGLE_FOLLOW_USER,
    SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE
} from "./actionTypes";

const initialState = {
    items: [
        {
            name: null,
            id: null,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        }
    ],

    isPreloaderActive: false,
    currentPage: 1,
    totalCount: 0,
    error: null,

    clickedButtonsIds: [1, 2]          // массив ид по которым кликнули чтобы подписаться отписаться, чтобы показывать лоадер вместо кнопки
};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE: {            // меняем в стейте массив юзеров(items), totalCount, error
            const superState = {
                ...state,
                items: [...action.usersArray],
                totalCount: action.totalCount,
                error: action.error
            };
            return superState;
        }

        case SET_CURRENT_PAGE_INTO_STATE: {
            const superState = {
                ...state,
                currentPage: action.currentPage
            };
            return superState;
        }

        case IS_PRELOADER_ACTIVE_INTO_STATE: {
            const superState = {
                ...state,
                isPreloaderActive: action.isActive
            };
            return superState;
        }

        case TOOGLE_FOLLOW_USER: {                          // меняем в редюсере items[i].followed
            const superState = {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.userId) {
                        return {...item, followed: action.isFollow};
                    } else {
                        return item;
                    };
                })
            };
            return superState;
        }

        case SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE: {                          // чтобы показывать лоадер вместо кнопки
            const superState = {
                ...state,
                clickedButtonsIds: [
                    ...state.clickedButtonsIds, 
                    action.userId
                ]
            };
            return superState;
        }

        case UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE: {                          // чтобы показывать кнопку вместо лоадера
            const superState = {
                ...state,
                clickedButtonsIds: state.clickedButtonsIds.filter(id => id !== action.userId)                    // присвоим миссиву кнопок новый массив с удаленным id отработанной кнопки
                // clickedButtonsIds: state.clickedButtonsIds.map(id => {
                //     if(id === action.userId) {
                //         return null;
                //     } else {
                //         return id;
                //     }
                // })
            };
            return superState;
        }

        default: return state;
    }
};

export default usersReducers;