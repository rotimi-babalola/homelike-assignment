import React from 'react';
import { uniqueId } from 'lodash';
import Dropdown from './Dropdown';

const details = ['Rooms', 'Bedrooms', 'Floor', 'Bathrooms'];

const SearchControls = () => (
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
);

export default SearchControls;
