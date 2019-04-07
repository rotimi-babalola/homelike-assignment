import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchControls from './SearchControls';
import ApartmentTileView from './ApartmentTileView';

class SearchApartmentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredApartments: {
        items: [],
      },
    };

    this.getLocationName = this.getLocationName.bind(this);
    this.searchByPrice = this.searchByPrice.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { locationId },
      },
    } = this.props;
    // const { locationId } = params;
    this.props.fetchApartmentsListForLocation(locationId);
    this.props.fetchLocations();
  }

  getLocationName() {
    const {
      match: { params },
    } = this.props;
    const { locationId } = params;
    if (!this.props.locations.length) {
      return 'Unable to get location';
    }
    const [currentLocation] = this.props.locations.filter(
      location => location._id === locationId,
    );
    return currentLocation.title;
  }

  searchByPrice(price) {
    const filtered = this.props.apartmentsForLocation.items.filter(
      apartment => parseInt(price, 10) <= apartment.price,
    );
    this.setState({
      filteredApartments: { items: filtered },
    });
  }

  renderResults() {
    if (!this.state.filteredApartments.items.length) {
      return <div>Type something...</div>;
    }
    return (
      <div className="view-apartment-list">
        {this.state.filteredApartments.items.map(item => (
          <ApartmentTileView key={item._id} apartment={item} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1 style={{ marginLeft: '20px' }}>Search Page</h1>
        <SearchControls searchApartmentByPrice={this.searchByPrice} />
        <div className="container-list container-lg clearfix">
          <h1>{this.getLocationName()}</h1>
          <div className="col-8 float-left">{this.renderResults()}</div>
        </div>
      </div>
    );
  }
}

SearchApartmentView.propTypes = {
  match: PropTypes.object,
  locations: PropTypes.array,
  apartmentsForLocation: PropTypes.object,
  fetchApartmentsListForLocation: PropTypes.func,
  fetchLocations: PropTypes.func,
};

export default withRouter(SearchApartmentView);
