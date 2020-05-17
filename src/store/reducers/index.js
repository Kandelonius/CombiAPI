// reducers index.js
import { combineReducers } from "redux";
import { fetchLocale as locale } from "../actions";

export default combineReducers({
    locale,
});