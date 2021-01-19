export const getIsModalLoginWindowAciveSelector =  (state) => {
    return state.loginModalWindow.isModalLoginWindowAcive;
}

export const getIsLoginButtonClickedSelector =  (state) => {
    return state.loginModalWindow.isLoginButtonClicked;
}

export const getIsCaptchActiveSelector =  (state) => {
    return state.loginModalWindow.isCapthaActive;
}

export const getCaptchaURLSelector =  (state) => {
    return state.loginModalWindow.captchaURL;
}

export const getResponseErrorTextSelector =  (state) => {
    return state.loginModalWindow.responseErrorText;
}