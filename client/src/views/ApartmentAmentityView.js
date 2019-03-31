import React from 'react';
import PropTypes from 'prop-types';

export default class ApartmentAmentityView extends React.Component {
  render() {
    const { apartment, limit = 3 } = this.props;
    const amentities = [];
    apartment.amenities.forEach((item, index) => {
      if (index < limit) {
        amentities.push(
          <span className="_1h9l4w0vvX6d56ZnJ3NLod">
            <i />
            <span>{item}</span>
          </span>,
        );
      }
    });
    return amentities;
  }
}

ApartmentAmentityView.propTypes = {
  apartment: PropTypes.object.isRequired,
  limit: PropTypes.number,
};
