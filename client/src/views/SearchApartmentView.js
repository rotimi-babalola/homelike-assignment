/* eslint-disable react/no-access-state-in-setstate */
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
        filteredItems: [],
      },
      query: {},
    };

    this.getLocationName = this.getLocationName.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.setSize = this.setSize.bind(this);
    this.filterApartments = this.filterApartments.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { locationId },
      },
    } = this.props;
    // get all apartment
    this.props.fetchApartmentsListForLocation(locationId);

    this.props.fetchLocations();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.apartmentsForLocation !== this.props.apartmentsForLocation) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        filteredApartments: {
          items: this.props.apartmentsForLocation.items,
          filteredItems: this.props.apartmentsForLocation.items,
        },
      });
    }
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

  setPrice(price) {
    this.setState({ query: { ...this.state.query, price } }, () =>
      this.filterApartments(this.state.query),
    );
  }

  setSize(size) {
    this.setState({ query: { ...this.state.query, size } }, () =>
      this.filterApartments(this.state.query),
    );
  }

  filterApartments(query) {
    let filteredApartments = this.state.filteredApartments.items;
    const arr = this.state.filteredApartments.items.length
      ? this.state.filteredApartments.items
      : this.props.apartmentsForLocation.items;
    if (query.price) {
      // filteredStuff(queryvalue, arr, querytype);
      // filteredStuff(60, )

      // const filteredStuff = (query, arr = []) =>
      //   arr.filter(apartment => apartment[querytype] >= queryvalue);
      filteredApartments = arr.filter(
        apartment => Number(query.price) <= apartment.price,
      );
    }
    if (query.size) {
      filteredApartments = arr.filter(
        apartment => Number(query.size) <= apartment.size,
      );
    }
    this.setState({
      filteredApartments: {
        ...this.state.filteredApartments,
        filteredItems: filteredApartments,
      },
    });
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
      !this.state.filteredApartments.filteredItems.length &&
      atLeastOneKeyTrue(this.state.query)
    ) {
      return <div>No apartments found...</div>;
    }
    return (
      <div className="view-apartment-list">
        {this.state.filteredApartments.filteredItems.map(item => (
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
        <SearchControls setPrice={this.setPrice} setSize={this.setSize} />
        <div className="container-list container-lg clearfix">
          <h1
            style={{
              fontSize: '25px',
              borderBottom: '1px #d3d3d3 solid',
              paddingBottom: '6px',
            }}
          >
            {`Search apartments in  ${this.getLocationName()}`}
          </h1>
          <div className="col-8 float-left" style={{ padding: '0' }}>
            {this.renderResults()}
          </div>
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
