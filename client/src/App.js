/* eslint-disable object-curly-newline */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import client from './ApolloClient';
import store from './store';
import routes from './routes';

import '../public/bootstrap-grid.min.css';
import '../public/css/main.css';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.default.map(({ exact, path, component, id }) => (
            <Route key={id} exact={exact} path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
