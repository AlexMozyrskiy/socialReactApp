import {
    SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE,
    SET_CURRENT_PAGE_INTO_STATE,
    IS_PRELOADER_ACTIVE_INTO_STATE, TOOGLE_FOLLOW_USER,
    SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE, UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE,
    TOOGLE_RUN_USE_EFFECT, IS_BUTTON_LOAD_MORE_USERS_CLICKED, TOOGLE_IS_FIRST_USERS_LOADED,
    SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES
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
    isButtonLoadMoreUsersClicked: false,
    currentPage: 1,         // используется только для работы с книпкой внизу "Sow more Users", для пагинации используется свойство созданное при помощи useState
    totalCount: 0,          // всего юзеров на сервере
    countOfShownUsers: 5,   // количесвто показываемых на странице юзеров, используется при GET запросе на сервер и получении значения максимально возможных показываемых квавдратиков пагинации в usersPage, также если мы на последней странице списка юзеров, не будет показываться кнопка "Sow more Users"
    error: null,
    isFirstUsersLoaded: false,  // Если первые юзеры загружены то будем добавлять юзеров в стейт, в противном случае заменим initialState.items, который итзначально содержит один айтем с null, на массив с юзерами полученными в первый раз

    runUseEffectInUsersPageContainer: true,     // введено для того чтобы: при первом рендере компонента useEffect выполняется всегда, даже если переменная пекреданная ему не поменялась. Чтобы useEffect не запускался каждый раз при рендере(переходе например с другой страницы) вводим условие при котором он булдет запускаться

    clickedButtonsIds: [],          // массив ид по которым кликнули чтобы подписаться отписаться, чтобы показывать лоадер вместо кнопки

    numberInFirstPaginationSquare: 1,
    numberInLastPaginationSquare: 10
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

        case IS_BUTTON_LOAD_MORE_USERS_CLICKED: {
            const superState = {
                ...state,
                isButtonLoadMoreUsersClicked: action.isClicked
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
                    if (item.id === action.userId) {
                        return { ...item, followed: action.isFollow };
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

        case TOOGLE_IS_FIRST_USERS_LOADED: {                          // чтобы показывать кнопку вместо лоадера
            const superState = {
                ...state,
                isFirstUsersLoaded: action.booleanVariable
            };
            return superState;
        }

        case SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES: {
            const superState = {
                ...state,
                numberInFirstPaginationSquare: action.numberInFirstPaginationSquare,
                numberInLastPaginationSquare: action.numberInLastPaginationSquare
            };
            return superState;
        }

        default: return state;
    }
};

export default usersReducers;