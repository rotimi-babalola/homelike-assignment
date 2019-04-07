import {
  FETCH_APARTMENTS_LIST,
  FETCH_APARTMENTS_LIST_ERROR,
  FETCH_APARTMENTS_LOCATION_LIST,
  FETCH_APARTMENTS_LOCATION_LIST_ERROR,
  SEARCH_APARTMENTS_PRICE,
} from '../actions/types';

const initialState = {
  apartments: {},
  apartmentsForLocation: {},
};

const searchByPrice = (state, payload) => {
  const newState = { ...state };
  newState.apartmentsForLocation = {
    items: state.apartmentsForLocation.items.filter(
      apartment => parseInt(payload, 10) <= apartment.price,
    ),
  };
  return newState;
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
        ...state,
        apartmentsForLocation: action.payload.data.apartments,
      };
    case FETCH_APARTMENTS_LOCATION_LIST_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case SEARCH_APARTMENTS_PRICE:
      return searchByPrice(state, action.payload);
    default:
      return state;
  }
};
