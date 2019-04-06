import React from 'react';
import ApartmentLocationView from '../containers/ApartmentLocationView';
import SearchControls from './SearchControls';

const SearchApartmentView = () => (
  <div>
    <h1 style={{ marginLeft: '20px' }}>Search Page</h1>
    <SearchControls />
    <ApartmentLocationView />
  </div>
);

export default SearchApartmentView;
