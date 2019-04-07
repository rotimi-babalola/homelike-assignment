import { connect } from 'react-redux';
import { fetchApartmentsListForLocation } from '../actions/apartmentsListActions';
import { fetchLocations } from '../actions/locationActions';
import SearchApartmentView from '../views/SearchApartmentView';

const mapStateToProps = state => ({
  locations: state.locations.data || [],
  apartmentsForLocation: state.apartmentsList.apartmentsForLocation || {},
});

const mapDispatchToProps = dispatch => ({
  fetchApartmentsListForLocation: locationId => {
    dispatch(fetchApartmentsListForLocation(locationId));
  },
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
});

const SearchApartmentViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchApartmentView);

export default SearchApartmentViewContainer;
