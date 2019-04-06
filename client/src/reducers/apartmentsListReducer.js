import {
  FETCH_APARTMENTS_LIST,
  FETCH_APARTMENTS_LIST_ERROR,
  FETCH_APARTMENTS_LOCATION_LIST,
  // FETCH_APARTMENTS_LOCATION_LIST_ERROR,
} from '../actions/types';

const initialState = {
  apartments: {},
  apartmentsByLocation: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_LIST:
      return {
        ...state,
        apartments: action.payload.apartments,
      };
    case FETCH_APARTMENTS_LIST_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case FETCH_APARTMENTS_LOCATION_LIST:
      return {
        //
      };
    default:
      return state;
  }
};
