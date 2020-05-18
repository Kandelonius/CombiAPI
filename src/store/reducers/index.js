// reducers index.js
import { combineReducers } from "redux";
import { localeReducer as locale } from "./LocationReducer";
import { MTGReducer as MTG } from "./MTGReducer";

export default combineReducers({
    locale,
    MTG,
});