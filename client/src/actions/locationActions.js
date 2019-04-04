import gql from 'graphql-tag';
import { FETCH_LOCATIONS, FETCH_LOCATIONS_ERROR } from './types';
import client from '../ApolloClient';

export const fetchLocations = () => dispatch => {
  client
    .query({
      query: gql`
        {
          locations {
            items {
              _id
              title
            }
          }
        }
      `,
    })
    .then(response => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: response.data.locations,
      });
    })
    .catch(error =>
      dispatch({
        type: FETCH_LOCATIONS_ERROR,
        payload: error,
      }),
    );
};
