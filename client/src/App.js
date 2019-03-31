import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from './views/HomeView';
import client from './ApolloClient';
import store from './store';
import { ApartmentView } from './views/ApartmentView';

import '../public/bootstrap-grid.min.css';
import '../public/css/main.css';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={HomeView} />
          <Route
            exact
            path="/apartments/:apartmentId"
            component={ApartmentView}
          />
        </div>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
