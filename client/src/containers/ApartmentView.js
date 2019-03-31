import { connect } from 'react-redux';
import { fetchApartment } from '../actions/apartmentActions';
import ApartmentView from '../views/ApartmentView';

const mapStateToProps = state => ({
  apartment: state.apartmentItem.apartment || {},
});

const mapDispatchToProps = dispatch => ({
  fetchApartment: apartmentId => {
    dispatch(fetchApartment(apartmentId));
  },
});

const ApartmentViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentView);

export default ApartmentViewContainer;
