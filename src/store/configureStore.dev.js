import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const configureStore = (intialState) => createStore(
  rootReducer,
  intialState,
  applyMiddleware(thunk, reduxImmutableStateInvariant())
);

export default configureStore;
