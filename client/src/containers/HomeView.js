import { connect } from 'react-redux';
import { fetchApartmentsList } from '../actions/apartmentsListActions';
import { fetchLocations } from '../actions/locationActions';
import HomeView from '../views/HomeView';

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments || {},
});

const mapDispatchToProps = dispatch => ({
  fetchApartmentsList: () => {
    dispatch(fetchApartmentsList());
  },
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
});

const HomeViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);

export default HomeViewContainer;
