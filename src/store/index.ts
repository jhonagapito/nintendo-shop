import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import api from '../services/api';
import reducers from '../reducers/index';

const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
