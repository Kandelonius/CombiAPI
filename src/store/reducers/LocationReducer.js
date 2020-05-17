// Reducer for the location actions
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
    isFetching: false,
    smurf: null,
    add: null,
    error: ""
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurf: action.payload,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
}; 