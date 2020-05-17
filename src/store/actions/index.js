// actions index.js
import axios from "axios";

const url = "https://ipvigilante.com/";
const format = "json/";
const IP = "8.8.8.8";
const params = '';
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchLocale = () => dispatch => {
    dispatch({ type: FETCH });
    axios.get(`${url}${format}${IP}${params}"`)
        .then(res => {
            console.log('res ', res);
            // dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE, payload: "oops, that's not good..." });
        });
};