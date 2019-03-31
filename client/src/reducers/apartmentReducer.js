import { FETCH_APARTMENT, FETCH_APARTMENT_ERROR } from '../actions/types';

const initialState = {
  apartment: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENT:
      return {
        ...state,
        apartment: action.payload.apartment,
      };
    case FETCH_APARTMENT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
