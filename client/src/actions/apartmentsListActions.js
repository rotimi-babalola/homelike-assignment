import gql from 'graphql-tag';
import {
  FETCH_APARTMENTS_LIST,
  FETCH_APARTMENTS_LIST_ERROR,
  FETCH_APARTMENTS_LOCATION_LIST,
  FETCH_APARTMENTS_LOCATION_LIST_ERROR,
  SEARCH_APARTMENTS,
  SEARCH_APARTMENTS_ERROR,
} from './types';
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
    .then(apartments => {
      dispatch({
        type: FETCH_APARTMENTS_LIST,
        payload: apartments.data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_APARTMENTS_LIST_ERROR,
        payload: error,
      });
    });
};

export const fetchApartmentsListForLocation = locationId => dispatch => {
  client
    .query({
      query: gql`
        {
          apartments(active: true, location: "${locationId}") {
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
    .then(apartments => {
      dispatch({
        type: FETCH_APARTMENTS_LOCATION_LIST,
        payload: { data: apartments.data, locationId },
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_APARTMENTS_LOCATION_LIST_ERROR,
        payload: error,
      });
    });
};

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
