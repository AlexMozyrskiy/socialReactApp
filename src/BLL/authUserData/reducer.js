import {
    LOGGED_IN_OUT_USER_DATA, SET_USER_STATUS_INTO_STATE,
    SET_USER_INFO_INTO_STATE, SET_USER_PHOTOS_INTO_STATE,
    TOOGLE_LOOKING_FOR_A_JOB, RUN_USE_EFFECT_APP_COMPONENT
} from "./actionTypes";

const initialState = {
    runUseEffectAppComponent: true,          // для того чтобы в useEffect в App.js делать запрос на сервер авторизован ли пользователь(me) только 1 раз при логине и логауте. useEffect делает 2 раза так как зависит от свойства стейта isLoggedIn, а при авторизации и логауте оно меняется и получается запрос уходит 2 раза
    isLoggedIn: false,
    id: null,
    login: "",
    email: "",
    status: "",
    aboutMe: "",
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
        facebook: null,
        github: null,
        instagram: null,
        mainLink: null,
        twitter: null,
        vk: null,
        website: null,
        youtube: null
    },
    photos: {
        small: null,
        large: null
    }
};

const authUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN_OUT_USER_DATA: {
            const superState = {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isLoggedIn: action.isLoggedIn
            };
            return superState;
        }

        case SET_USER_STATUS_INTO_STATE: {
            const superState = {
                ...state,
                status: action.status
            };
            return superState;
        }

        case RUN_USE_EFFECT_APP_COMPONENT: {                // смотри комментарий по этому свойству в редюсере
            const superState = {
                ...state,
                runUseEffectAppComponent: action.runUseEffectAppComponent
            };
            return superState;
        }

        case TOOGLE_LOOKING_FOR_A_JOB: {
            const superState = {
                ...state,
                lookingForAJob: action.lookingForAJob
            };
            return superState;
        }

        case SET_USER_PHOTOS_INTO_STATE: {
            const superState = {
                ...state,
                photos: {
                    ...state.photos,
                    small: action.photoSmall,
                    large: action.photoLarge
                }
            };
            return superState;
        }

        case SET_USER_INFO_INTO_STATE: {
            const superState = {
                ...state,
                aboutMe: action.aboutMe,
                lookingForAJob: action.lookingForAJob,
                lookingForAJobDescription: action.lookingForAJobDescription,
                fullName: action.fullName,
                photos: {
                    ...state.photos,
                    small: action.photoSmall,
                    large: action.photoLarge
                },
                contacts: {
                    ...state.contacts,
                    facebook: action.facebook,
                    github: action.github,
                    instagram: action.instagram,
                    mainLink: action.mainLink,
                    twitter: action.twitter,
                    vk: action.vk,
                    website: action.website,
                    youtube: action.youtube
                }
            };
            return superState;
        }

        default: return state;
    }
};

export default authUserDataReducer;