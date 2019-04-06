import gql from 'graphql-tag';
import { SEARCH_APARTMENTS, SEARCH_APARTMENTS_ERROR } from './types';
import client from '../ApolloClient';

export const searchApartments = locationId => dispatch => {
  client
    .query({
      query: gql`
        {
          apartments(active: true, location: "${locationId}") {
            items {
              _id
              size
              price
              amenities
              details {
                rooms
                bedrooms
                floor
                bathrooms
              }
              services
            }
          }
        }
      `,
    })
    .then(apartments => {
      dispatch({
        type: SEARCH_APARTMENTS,
        payload: { data: apartments.data, locationId },
      });
    })
    .catch(error => {
      dispatch({
        type: SEARCH_APARTMENTS_ERROR,
        payload: error,
      });
    });
};
