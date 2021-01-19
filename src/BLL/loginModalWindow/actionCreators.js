import {
    IS_MODAL_LOGIN_WINDOW_ACTIVE, IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED,
    SET_CAPTCHA_INTO_STATE, SET_RESPONSE_ERROR_TEXT_INTO_STATE
} from "./actionTypes";

export const setIsModalLoginWindowActive = (isModalLoginWindowAcive) => ({ type: IS_MODAL_LOGIN_WINDOW_ACTIVE, isModalLoginWindowAcive });
export const setIsModalLoginWindowButtonClicked = (isLoginButtonClicked) => ({ type: IS_MODAL_LOGIN_WINDOW_BUTTON_CLICKED, isLoginButtonClicked });
export const setCaptchaIntoState = (isCapthaActive, captchaURL) => ({ type: SET_CAPTCHA_INTO_STATE, isCapthaActive, captchaURL });
export const setResponseErrorTextIntoState = (responseErrorText) => ({ type: SET_RESPONSE_ERROR_TEXT_INTO_STATE, responseErrorText });