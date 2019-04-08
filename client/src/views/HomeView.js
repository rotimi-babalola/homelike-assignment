import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ApartmentTileView from './ApartmentTileView';
import Header from '../containers/HeaderView';

class HomeView extends React.Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
    this.props.fetchLocations();
  }

  render() {
    const { apartmentsList } = this.props;
    if (!Object.keys(apartmentsList).length) {
      return (
        <div className="loader">
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }

    return (
      <React.Fragment>
        <Header />
        <div className="container-list container-lg clearfix">
          <div className="col-12 float-left">
            <div className="view-apartment-list">
              {apartmentsList.items.map(item => (
                <ApartmentTileView key={item._id} apartment={item} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomeView.propTypes = {
  apartmentsList: PropTypes.object.isRequired,
  fetchApartmentsList: PropTypes.func.isRequired,
  fetchLocations: PropTypes.func.isRequired,
};

export default HomeView;
