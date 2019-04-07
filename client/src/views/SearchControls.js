import React, { useState, useEffect } from 'react';
import { uniqueId, capitalize } from 'lodash';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const details = [
  { name: 'rooms', icon: 'fa fa-home', value: 1 },
  { name: 'bedrooms', icon: 'fa fa-bed', value: 1 },
  { name: 'floor', icon: 'fa fa-building', value: 1 },
  { name: 'bathrooms', icon: 'fa fa-bath', value: 1 },
];

const SearchControls = props => {
  const [detailValue, setDetailValue] = useState({});

  useEffect(() => {
    props.setDetail(detailValue);
  }, [detailValue]);

  const disableButton = value => {
    if (!value) {
      return true;
    }
    if (value < 1) {
      return true;
    }
    return false;
  };

  return (
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
        onChange={evt => props.setService(evt.target.value)}
      />
      <Dropdown
        title="Details"
        dropDownStyle={{
          backgroundColor: '#000',
          display: 'block',
          textAlign: 'center',
          paddingTop: '10px',
          flex: '0.5',
          cursor: 'pointer',
        }}
        contentStyle={{ textAlign: 'left', width: '350px' }}
      >
        {details.map(detail => (
          <div key={uniqueId()}>
            <i className={`${detail.icon} detail-icon`} />
            {capitalize(detail.name)}
            <button
              type="button"
              className=""
              style={{ marginLeft: '5px', marginRight: '5px' }}
              name={detail.name}
              id={detail.name}
              disabled={disableButton(detailValue[detail.name])}
              onClick={evt => {
                setDetailValue({
                  ...detailValue,
                  [evt.target.id]: detailValue[evt.target.id] - 1,
                });
              }}
            >
              -
            </button>
            <span>{detailValue[detail.name] || 0}</span>
            <button
              className=""
              type="button"
              id={detail.name}
              style={{ marginLeft: '5px', marginRight: '5px' }}
              onClick={evt => {
                setDetailValue({
                  ...detailValue,
                  [evt.target.id]: (detailValue[evt.target.id] || 0) + 1,
                });
              }}
            >
              +
            </button>
          </div>
        ))}
      </Dropdown>
    </div>
  );
};

SearchControls.propTypes = {
  setPrice: PropTypes.func,
  setSize: PropTypes.func,
  setAmenity: PropTypes.func,
  setService: PropTypes.func,
  setDetail: PropTypes.func,
};

export default SearchControls;
