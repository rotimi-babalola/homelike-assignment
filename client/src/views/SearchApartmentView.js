import React from 'react';
import PropTypes from 'prop-types';
import ApartmentLocationView from '../containers/ApartmentLocationView';
import SearchControls from './SearchControls';

const SearchApartmentView = props => (
  <div>
    <h1 style={{ marginLeft: '20px' }}>Search Page</h1>
    <SearchControls searchApartmentByPrice={props.searchApartmentByPrice} />
    <ApartmentLocationView />
  </div>
);

SearchApartmentView.propTypes = {
  searchApartmentByPrice: PropTypes.func,
};

export default SearchApartmentView;
