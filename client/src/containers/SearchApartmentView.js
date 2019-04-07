import { connect } from 'react-redux';
import { searchApartmentByPrice } from '../actions/searchAction';
import SearchApartmentView from '../views/SearchApartmentView';

const mapDispatchToProps = dispatch => ({
  searchApartmentByPrice: price => {
    dispatch(searchApartmentByPrice(price));
  },
});

const SearchApartmentViewContainer = connect(
  null,
  mapDispatchToProps,
)(SearchApartmentView);

export default SearchApartmentViewContainer;
