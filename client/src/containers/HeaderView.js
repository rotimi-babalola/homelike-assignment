import { connect } from 'react-redux';
import HeaderView from '../views/HeaderView';

const mapStateToProps = state => ({
  locations: state.locations.data || [],
});

const HeaderViewContainer = connect(
  mapStateToProps,
  null,
)(HeaderView);

export default HeaderViewContainer;
