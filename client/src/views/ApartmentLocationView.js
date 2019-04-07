import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import ApartmentTileView from './ApartmentTileView';

class ApartmentLocationView extends React.Component {
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
    if (!this.props.locations.length) {
      this.props.fetchLocations();
    }
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

    if (!this.props.locations.length) {
      this.props.fetchLocations();
    }
  }

  getLocationName() {
    const {
      match: { params },
    } = this.props;
    const { locationId } = params;
    if (!this.props.locations.length) {
      return 'Unable to get location';
    }
    const [currentLocation] = this.props.locations.filter(
      location => location._id === locationId,
    );
    return currentLocation.title;
  }

  render() {
    const { apartmentsForLocation } = this.props;
    if (!Object.keys(apartmentsForLocation).length) {
      return (
        <div className="loader">
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }
    if (this.props.error) {
      return <h1>An error occurred getting apartments for this location</h1>;
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
        <Link to="/" className="go-home">
          Go home
        </Link>
      </React.Fragment>
    );
  }
}

ApartmentLocationView.propTypes = {
  match: PropTypes.object.isRequired,
  fetchApartmentsListForLocation: PropTypes.func.isRequired,
  fetchLocations: PropTypes.func.isRequired,
  apartmentsForLocation: PropTypes.object.isRequired,
  locations: PropTypes.array,
  error: PropTypes.object,
};

export default withRouter(ApartmentLocationView);
