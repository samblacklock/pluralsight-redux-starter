import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const configureStore = (intialState) => createStore(
  rootReducer,
  intialState,
  applyMiddleware(thunk)
);

export default configureStore;
