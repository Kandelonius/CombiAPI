// reducers index.js
import { combineReducers } from "redux";
import { localeReducer as locale } from "./LocationReducer";

export default combineReducers({
    locale,
});