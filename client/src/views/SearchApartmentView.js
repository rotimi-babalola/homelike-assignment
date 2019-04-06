import React from 'react';
// import { withRouter } from 'react-router-dom';
import { uniqueId } from 'lodash';
import Dropdown from './Dropdown';
import ApartmentLocationView from '../containers/ApartmentLocationView';

const details = ['Rooms', 'Bedrooms', 'Floor', 'Bathrooms'];

const SearchApartmentView = () => (
  <div>
    <h1 style={{ marginLeft: '20px' }}>Search Page</h1>
    <div
      className="search-controls"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <input
        type="number"
        name=""
        id=""
        placeholder="Enter Price"
        min="0"
        size="100"
      />
      <input type="number" name="" id="" placeholder="Enter Size" min="0" />
      <input type="text" name="" id="" placeholder="Enter amenities" />
      <input type="text" name="" id="" placeholder="Enter services" />
      <Dropdown
        title="Details"
        style={{ backgroundColor: '#000', display: 'inline' }}
      >
        {details.map(detail => (
          <div key={uniqueId()}>
            <i className="fa fa-user mr-2" style={{ margin: '15px' }} />
            {detail}
            <button type="button" className="">
              -
            </button>
            <span>1</span>
            <button className="" type="button">
              +
            </button>
          </div>
        ))}
      </Dropdown>
    </div>
    <ApartmentLocationView />
  </div>
);

export default SearchApartmentView;
