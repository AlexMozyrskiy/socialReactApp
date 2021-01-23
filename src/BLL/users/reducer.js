import {
    SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE,
    IS_PRELOADER_ACTIVE_INTO_STATE, TOOGLE_FOLLOW_USER,
    SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE,
    TOOGLE_RUN_USE_EFFECT
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
    isFirstUsersLoaded: false,   // Если первые юзеры загружены

    runUseEffectInUsersPageContainer: true,     // введено для того чтобы: при первом рендере компонента useEffect выполняется всегда, даже если переменная пекреданная ему не поменялась. Чтобы useEffect не запускался каждый раз при рендере(переходе например с другой страницы) вводим условие при котором он булдет запускаться

    clickedButtonsIds: []          // массив ид по которым кликнули чтобы подписаться отписаться, чтобы показывать лоадер вместо кнопки
};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE: {            // меняем в стейте массив юзеров(items), totalCount, error
            const superState = {
                ...state,
                items: state.isFirstUsersLoaded ? [...state.items, ...action.usersArray] : [...action.usersArray], // Если первые юзеры загружены то будем добавлять юзеров в стейт, в противном случае заменим initialState.items, который итзначально содержит один айтем с null, на массив с юзерами полученными в первый раз
                totalCount: action.totalCount,
                error: action.error,
                isFirstUsersLoaded: true
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

        case TOOGLE_RUN_USE_EFFECT: {
            const superState = {
                ...state,
                runUseEffectInUsersPageContainer: action.booleanVariable
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