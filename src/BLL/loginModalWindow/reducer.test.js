import { setIsModalLoginWindowActive } from "./actionCreators";
import loginModalWindowReducer from "./reducer";

/* Тест при нажатии на кнопку LogIn в Хедере в стейте меняется isModalLoginWindowAcive на true */
let initialState = {
    isModalLoginWindowAcive: false,
    isCapthaActive: false,
    captchaURL: ""
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