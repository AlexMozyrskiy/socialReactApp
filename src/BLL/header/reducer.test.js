import { setIsHeaderLoginButtonClicked, setIsHeaderSearchButtonClicked } from "./actionCreators";
import headerReducer from "./reducer";

/* Тест при нажатии на кнопку LogIn в Хедере в стейте меняется isLoginButtonClicked в редюсере header на true */
let initialState = {
    isLoginButtonClicked: false
};

it("after click on the Login Button header.isLoginButtonClicked must to be true", () => {
    // 1. test data
    let action = setIsHeaderLoginButtonClicked(true);

    // 2. action
    let newState = headerReducer(initialState, action);

    // 3. expectation
    expect(newState.isLoginButtonClicked).toBe(true);
});

/* / Тест при нажатии на кнопку LogIn в Хедере в стейте меняется isModalLoginWindowAcive на true */



/* Тест при нажатии на кнопку Search в Хедере в стейте меняется isSearchButtonClicked в редюсере header на true */
initialState = {
    isLoginButtonClicked: false,
    isSearchButtonClicked: false
};

it("after click on the Search Button header.isSearchButtonClicked must to be true", () => {
    // 1. test data
    let action = setIsHeaderSearchButtonClicked(true);

    // 2. action
    let newState = headerReducer(initialState, action);

    // 3. expectation
    expect(newState.isSearchButtonClicked).toBe(true);
});

/* / Тест при нажатии на кнопку Search в Хедере в стейте меняется isSearchButtonClicked в редюсере header на true */