import React from 'react';
import PropTypes from 'prop-types';
import ApartmentTileView from './ApartmentTileView';

class HomeView extends React.Component {
  componentWillMount() {
    this.props.fetchApartmentsList();
    this.props.fetchLocations();
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

HomeView.propTypes = {
  apartmentsList: PropTypes.object.isRequired,
  fetchApartmentsList: PropTypes.func.isRequired,
  fetchLocations: PropTypes.func.isRequired,
};

export default HomeView;
