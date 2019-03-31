import { connect } from 'react-redux';
import { fetchApartmentsList } from '../actions/apartmentsListActions';
import HomeView from '../views/HomeView';

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments || {},
});

const mapDispatchToProps = dispatch => ({
  fetchApartmentsList: () => {
    dispatch(fetchApartmentsList());
  },
});

const HomeViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);

export default HomeViewContainer;
