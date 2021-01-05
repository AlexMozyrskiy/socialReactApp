import { IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED } from "./actionTypes";

export const setIsModalLoginWindowActive = (isModalLoginWindowAcive) => ({ type: IS_MODAL_LOGIN_WINDOW_ACTIVE, isModalLoginWindowAcive });
export const setIsModalLoginWindowButtonClicked = (isLoginButtonClicked) => ({ type: IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED, isLoginButtonClicked });