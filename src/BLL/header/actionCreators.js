import { IS_HEADER_LOGIN_BUTTON_CLICKED, IS_HEADER_SEARCH_BUTTON_CLICKED } from "./actionTypes";

export const setIsHeaderLoginButtonClicked = (isLoginButtonClicked) => ({ type: IS_HEADER_LOGIN_BUTTON_CLICKED, isLoginButtonClicked });
export const setIsHeaderSearchButtonClicked = (isSearchButtonClicked) => ({ type: IS_HEADER_SEARCH_BUTTON_CLICKED, isSearchButtonClicked });