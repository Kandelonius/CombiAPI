import axios from "axios";

const url = "https://api.openbrewerydb.org/breweries";
export const FETCH_BREWERY = 'FETCH_BREWERY';
export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS';
export const FETCH_BREWERY_FAILURE = 'FETCH_BREWERY_FAILURE';

export const fetchBrewery = () => {
    return dispatch => {
        dispatch({ type: FETCH_BREWERY });
        axios.get(url)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_BREWERY_SUCCESS, payload: res.data[16] });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_BREWERY_FAILURE, payload: "oops, that's not good..." });
        });
    };
};