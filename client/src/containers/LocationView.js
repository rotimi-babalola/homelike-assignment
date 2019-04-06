import { connect } from 'react-redux';
import LocationView from '../views/LocationView';
import { fetchApartmentsListForLocation } from '../actions/apartmentsListActions';
import { fetchLocations } from '../actions/locationActions';

const mapStateToProps = state => ({
  apartmentsForLocation: state.apartmentsList.apartmentsForLocation || {},
  locations: state.locations.data || [],
});

const mapDispatchToProps = dispatch => ({
  fetchApartmentsListForLocation: locationId => {
    dispatch(fetchApartmentsListForLocation(locationId));
  },
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
});

const LocationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationView);

export default LocationViewContainer;
