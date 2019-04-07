import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import SearchControls from './SearchControls';
import ApartmentTileView from './ApartmentTileView';
import atLeastOneKeyTrue from '../utils/atLeastOneKeyTrue';

class SearchApartmentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredApartments: {
        items: [],
      },
      query: {},
    };

    this.getLocationName = this.getLocationName.bind(this);
    this.searchByPrice = this.searchByPrice.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.searchBySize = this.searchBySize.bind(this);
    this.filterApartments = this.filterApartments.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { locationId },
      },
    } = this.props;
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
    this.setState({ query: { ...this.state.query, price } }, () =>
      this.filterApartments(this.state.query),
    );
  }

  searchBySize(size) {
    this.setState({ query: { ...this.state.query, size } }, () =>
      this.filterApartments(this.state.query),
    );
  }

  filterApartments(query) {
    let filteredApartments = [];
    const arr = this.state.filteredApartments.items.length
      ? this.state.filteredApartments.items
      : this.props.apartmentsForLocation.items;
    if (query.price) {
      filteredApartments = arr.filter(
        apartment => parseInt(query.price, 10) <= apartment.price,
      );
    }
    if (query.size) {
      filteredApartments = arr.filter(
        apartment => parseInt(query.size, 10) <= apartment.size,
      );
    }
    this.setState({ filteredApartments: { items: filteredApartments } });
  }

  renderResults() {
    if (
      !this.state.filteredApartments.items.length &&
      !atLeastOneKeyTrue(this.state.query)
    ) {
      return (
        <div className="view-apartment-list">
          {this.props.apartmentsForLocation.items.map(item => (
            <ApartmentTileView key={item._id} apartment={item} />
          ))}
        </div>
      );
    }
    if (
      !this.state.filteredApartments.items.length &&
      atLeastOneKeyTrue(this.state.query)
    ) {
      return <div>No apartments found...</div>;
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
    const { apartmentsForLocation } = this.props;
    if (!Object.keys(apartmentsForLocation).length) {
      return (
        <div className="loader">
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }

    if (this.props.error) {
      return <h1>An error occurred getting apartments for this location</h1>;
    }

    return (
      <div>
        <h1 style={{ marginLeft: '20px' }}>Search Page</h1>
        <SearchControls
          searchApartmentByPrice={this.searchByPrice}
          searchApartmentBySize={this.searchBySize}
        />
        <div className="container-list container-lg clearfix">
          <h1>{`Search apartments in  ${this.getLocationName()}`}</h1>
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
  error: PropTypes.object,
};

export default withRouter(SearchApartmentView);
