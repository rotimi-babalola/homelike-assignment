import { connect } from 'react-redux';
import ApartmentLocationView from '../views/ApartmentLocationView';
import { fetchApartmentsListForLocation } from '../actions/apartmentsListActions';
import { fetchLocations } from '../actions/locationActions';

const mapStateToProps = state => ({
  apartmentsForLocation: state.apartmentsList.apartmentsForLocation || {},
  locations: state.locations.data || [],
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchApartmentsListForLocation: locationId => {
    dispatch(fetchApartmentsListForLocation(locationId));
  },
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
});

const ApartmentLocationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentLocationView);

export default ApartmentLocationViewContainer;
