import { FETCH_BREWERY, FETCH_BREWERY_SUCCESS, FETCH_BREWERY_FAILURE } from "../actions/BreweryActions";

const initialState = {
    isFetching: false,
    brewery: null,
    location: null,
    error: ""
  };

  export const brewReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BREWERY:
        return {
          ...state,
          isFetching: true,
        };
        case FETCH_BREWERY_SUCCESS:
          return {
            ...state,
            isFetching: false,
            brewery: action.payload,
          };
          case FETCH_BREWERY_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: action.payload,
            };
      default:
        return state;
    }
  };