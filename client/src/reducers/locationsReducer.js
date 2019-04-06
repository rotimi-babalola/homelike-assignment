import { FETCH_LOCATIONS, FETCH_LOCATIONS_ERROR } from '../actions/types';

const initialState = {
  locations: {
    data: [],
  },
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state.locations,
        data: action.payload.items,
      };
    case FETCH_LOCATIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
