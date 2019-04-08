import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = props => (
  <div className="dropdown" style={props.dropDownStyle}>
    <button type="button" className="dropbtn">
      {props.title}
      <i className="fa fa-caret-down" />
    </button>
    <div className="dropdown-content" style={props.contentStyle}>
      {props.children}
    </div>
  </div>
);

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  dropDownStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};
