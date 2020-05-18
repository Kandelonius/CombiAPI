// Reducer for the location actions
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
    isFetching: false,
    MTG: null,
    add: null,
    error: ""
};

export const MTGReducer = (state = initialState, action) => {
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
                MTG: action.payload,
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