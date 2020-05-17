// actions index.js
import axios from "axios";

// const url = "https://api.ipgeolocationapi.com/geolocate HTTP/1.1";
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchLocale = () => dispatch => {
    dispatch({ type: FETCH });
    axios.get(url)
        .then(res => {
            console.log('res ', res);
            // dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE, payload: "oops, that's not good..." });
        });
};