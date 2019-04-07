import { SEARCH_APARTMENTS_PRICE } from './types';

export const searchApartmentByPrice = query => dispatch => {
  dispatch({
    type: SEARCH_APARTMENTS_PRICE,
    payload: query,
  });
};
