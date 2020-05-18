// Reducer for the location actions
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/LocationActions";

const initialState = {
    isFetching: false,
    locale: null,
    add: null,
    error: ""
};

export const localeReducer = (state = initialState, action) => {
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
                locale: action.payload,
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