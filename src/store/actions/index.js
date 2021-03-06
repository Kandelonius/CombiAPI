// actions index.js
import axios from "axios";

// const url = "https://ipvigilante.com/";
// const format = "json/";
// const IP = "8.8.8.8";
// const params = '';
// const header = {"Access-Control-Allow-Origin": "*"};

const url = "https://api.scryfall.com/cards";
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
// `${url}${format}${IP}${params}`, header
export const fetchData = () => dispatch => {
    dispatch({ type: FETCH });
    axios.get(url)
        .then(res => {
            console.log('res ', res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE, payload: "oops, that's not good..." });
        });
};