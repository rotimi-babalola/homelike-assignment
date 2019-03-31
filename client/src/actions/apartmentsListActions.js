import gql from 'graphql-tag';
import { FETCH_APARTMENTS_LIST, FETCH_APARTMENTS_LIST_ERROR } from './types';
import client from '../ApolloClient';

export const fetchApartmentsList = () => dispatch => {
  client
    .query({
      query: gql`
        {
          apartments(active: true) {
            items {
              _id
              owner {
                _id
                email
              }
              title
              location {
                title
              }
              size
              price
              amenities
              images
            }
          }
        }
      `,
    })
    .then(apartments =>
      dispatch({
        type: FETCH_APARTMENTS_LIST,
        payload: apartments.data,
      }),
    )
    .catch(error => {
      dispatch({
        type: FETCH_APARTMENTS_LIST_ERROR,
        payload: error,
      });
    });
};
