import { INITIALIZED_APP } from "./actionTypes";

export const initializedApp = (isAppInitialized) => ({type: INITIALIZED_APP, isAppInitialized});