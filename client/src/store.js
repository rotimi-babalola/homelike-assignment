import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

// eslint-disable-next-line no-confusing-arrow
const useReduxDevTools = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = compose(applyMiddleware(...middleWare))(
    createStore,
  );
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(...middleWare, logger),
    useReduxDevTools(),
  )(createStore);
}

const store = createStoreWithMiddleware(rootReducer, initialState);

export default store;
