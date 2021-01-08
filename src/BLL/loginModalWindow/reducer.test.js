import {
    setIsModalLoginWindowActive, setIsModalLoginWindowButtonClicked,
    setCaptchaIntoState
} from "./actionCreators";
import loginModalWindowReducer from "./reducer";

/* Тест при нажатии на кнопку LogIn в Хедере в стейте меняется isModalLoginWindowAcive на true */
let initialState = {
    isModalLoginWindowAcive: false,
    isCapthaActive: false,
    captchaURL: "",
    isLoginButtonClicked: false
}

it("after click on the Login Button loginModalWindow.isModalLoginWindowAcive must to be true", () => {
    // 1. test data
    let action = setIsModalLoginWindowActive(true);

    // 2. action
    let newState = loginModalWindowReducer(initialState, action);

    // 3. expectation
    expect(newState.isModalLoginWindowAcive).toBe(true);
});

/* / Тест при нажатии на кнопку LogIn в Хедере в стейте меняется isModalLoginWindowAcive на true */



/* Тест при нажатии на крстик в окне логина в стейте меняется isModalLoginWindowAcive на false */

initialState = {
    isModalLoginWindowAcive: true
}

it("after click on the cross on Login Modal Window loginModalWindow.isModalLoginWindowAcive must to be false", () => {
    // 1. test data
    let action = setIsModalLoginWindowActive(false);

    // 2. action
    let newState = loginModalWindowReducer(initialState, action);

    // 3. expectation
    expect(newState.isModalLoginWindowAcive).toBe(false);
});

/* / Тест при нажатии на крстик в окне логина в стейте меняется isModalLoginWindowAcive на false */


/* Тест при нажатии на кнопку LogIn в модальном окне в стейте меняется isLoginButtonClicked на true */
it("after click on the Login Button loginModalWindow.isLoginButtonClicked must to be true", () => {
    // 1. test data
    let action = setIsModalLoginWindowButtonClicked(true);

    // 2. action
    let newState = loginModalWindowReducer(initialState, action);

    // 3. expectation
    expect(newState.isLoginButtonClicked).toBe(true);
});

/* / Тест при нажатии на кнопку LogIn в модальном окне в стейте меняется isLoginButtonClicked на true */


/* Тест если получили url капчи поменяли isCapthaActive  на true */
it("if on response we get captcha url set isCapthaActive on true", () => {
    // 1. test data
    let action = setCaptchaIntoState(true, "https//someURL");

    // 2. action
    let newState = loginModalWindowReducer(initialState, action);

    // 3. expectation
    expect(newState.isCapthaActive).toBe(true);
});

/* / Тест если получили url капчи поменяли isCapthaActive  на true */


/* Тест если получили url капчи поменяли captchaURL  на этот URL */
it("if on response we get captcha url set captchaURL on getting URL", () => {
    // 1. test data
    const captchaURL = "https//someURL";
    let action = setCaptchaIntoState(true, captchaURL);

    // 2. action
    let newState = loginModalWindowReducer(initialState, action);

    // 3. expectation
    expect(newState.captchaURL).toBe(captchaURL);
});

/* / Тест если получили url капчи поменяли captchaURL  на этот URL */