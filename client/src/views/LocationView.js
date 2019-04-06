import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ApartmentTileView from './ApartmentTileView';

class LocationView extends React.Component {
  constructor(props) {
    super(props);
    this.getLocationName = this.getLocationName.bind(this);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const { locationId } = params;
    this.props.fetchApartmentsListForLocation(locationId);
  }

  componentDidUpdate(prevProps) {
    // if the location id changes fetch apartment list again
    if (
      prevProps.match.params.locationId !== this.props.match.params.locationId
    ) {
      const {
        match: { params },
      } = this.props;
      const { locationId } = params;
      this.props.fetchApartmentsListForLocation(locationId);
    }
  }

  getLocationName() {
    const {
      match: { params },
    } = this.props;
    const { locationId } = params;
    const [currentLocation] = this.props.locations.filter(
      location => location._id === locationId,
    );
    return currentLocation.title;
  }

  render() {
    const { apartmentsForLocation } = this.props;
    if (!Object.keys(apartmentsForLocation).length) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <div className="container-list container-lg clearfix">
          <h1>{this.getLocationName()}</h1>
          <div className="col-8 float-left">
            <div className="view-apartment-list">
              {apartmentsForLocation.items.map(item => (
                <ApartmentTileView key={item._id} apartment={item} />
              ))}
            </div>
          </div>
        </div>
        <Link to="/">Go home</Link>
      </React.Fragment>
    );
  }
}

LocationView.propTypes = {
  match: PropTypes.object.isRequired,
  fetchApartmentsListForLocation: PropTypes.func.isRequired,
  apartmentsForLocation: PropTypes.object.isRequired,
  locations: PropTypes.array,
};

export default LocationView;
