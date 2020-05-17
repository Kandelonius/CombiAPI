// reducers index.js
import { combineReducers } from "redux";
import { fetchLocale as locale } from "../actions/LocationActions";

export default combineReducers({
    locale,
});