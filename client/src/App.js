import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from './containers/HomeView';
import client from './ApolloClient';
import store from './store';
import ApartmentView from './containers/ApartmentView';

import '../public/bootstrap-grid.min.css';
import '../public/css/main.css';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route
            path="/apartments/:apartmentId"
            render={props => <ApartmentView {...props} />}
          />
        </Switch>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
