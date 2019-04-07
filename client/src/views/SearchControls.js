import React from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const details = ['Rooms', 'Bedrooms', 'Floor', 'Bathrooms'];

const SearchControls = props => (
  <div
    className="search-controls"
    style={{ display: 'flex', justifyContent: 'space-around' }}
  >
    <input
      type="number"
      name="price"
      id="price"
      placeholder="Enter Price"
      min="0"
      size="100"
      onChange={evt => props.searchApartmentByPrice(evt.target.value)}
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
);

SearchControls.propTypes = {
  searchApartmentByPrice: PropTypes.func,
};

export default SearchControls;
