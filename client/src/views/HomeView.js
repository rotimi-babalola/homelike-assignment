import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApartmentsList } from '../actions/apartmentsListActions';
import ApartmentTileView from './ApartmentTileView';

class HomeView extends React.Component {
  componentWillMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    const { apartmentsList } = this.props;
    if (!Object.keys(apartmentsList).length) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            {apartmentsList.items.map(item => (
              <ApartmentTileView key={item._id} apartment={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments,
});

export default connect(
  mapStateToProps,
  { fetchApartmentsList },
)(HomeView);

HomeView.propTypes = {
  apartmentsList: PropTypes.array.isRequired,
  fetchApartmentsList: PropTypes.func.isRequired,
};
