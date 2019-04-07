import React from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const details = ['Rooms', 'Bedrooms', 'Floor', 'Bathrooms'];

const SearchControls = props => (
  <div className="search-controls">
    <input
      type="number"
      name="price"
      id="price"
      placeholder="Enter Price"
      min="0"
      size="100"
      onChange={evt => props.setPrice(evt.target.value)}
    />
    <input
      type="number"
      name="size"
      id="size"
      placeholder="Enter Size"
      min="0"
      onChange={evt => props.setSize(evt.target.value)}
    />
    <input
      type="text"
      name="amenities"
      id="amenities"
      placeholder="Enter amenities"
      onChange={evt => props.setAmenity(evt.target.value)}
    />
    <input
      type="text"
      name="services"
      id="services"
      placeholder="Enter services"
    />
    <Dropdown
      title="Details"
      style={{
        backgroundColor: '#000',
        display: 'block',
        textAlign: 'center',
        paddingTop: '10px',
        flex: '0.5',
      }}
    >
      {details.map(detail => (
        <div key={uniqueId()}>
          <i className="fa fa-user mr-2" />
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
  setPrice: PropTypes.func,
  setSize: PropTypes.func,
  setAmenity: PropTypes.func,
};

export default SearchControls;
