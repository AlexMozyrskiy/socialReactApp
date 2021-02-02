export const SET_USERS_ARRAY_TOTAL_COUNT_ERROR_INTO_STATE = 'socialNetwork/users/SET_USERS_ARRAY_TOTAL_COUNT_ERROR_AFTER_CLICK_SHOW_MORE_USERS_INTO_STATE';         // эта константа будет использовать в свитч кейсе редюсера когда юзер нажмет кнопку внизу страницы "Show More Users", чтобы в случае необходимости дозаписать в массив новых юзеров
export const SET_CURRENT_PAGE_INTO_STATE = 'socialNetwork/users/SET_CURRENT_PAGE_INTO_STATE';
export const TOOGLE_FOLLOW_USER = 'socialNetwork/users/TOOGLE_FOLLOW_USER';
export const IS_PRELOADER_ACTIVE_INTO_STATE = 'socialNetwork/users/IS_PRELOADER_ACTIVE_INTO_STATE';
export const SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE = 'socialNetwork/users/SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE';        // чтобы показывать лоадер вместо кнопки
export const UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE = 'socialNetwork/users/UN_SET_FOLLOW_BUTTON_CLICKED_ID_INTO_STATE';  // чтобы показывать кнопку вместо лоадера
export const TOOGLE_RUN_USE_EFFECT = 'socialNetwork/users/TOOGLE_RUN_USE_EFFECT';
export const TOOGLE_IS_FIRST_USERS_LOADED = 'socialNetwork/users/TOOGLE_IS_FIRST_USERS_LOADED';     //   заменять или добавлять к массиву юзеров новых юзеров, если кликнули "Show More Users" тогда будем добавлять, если кликнули квалдратик пагинации или первый раз загружаем страницу юзеров будем заменять
export const IS_BUTTON_LOAD_MORE_USERS_CLICKED = 'socialNetwork/users/IS_BUTTON_LOAD_MORE_USERS_CLICKED';
export const SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES = 'socialNetwork/users/SET_NUMBERS_IN_FIRST_LAST_PAGINATION_SQUARES';