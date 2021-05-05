import { rootReducer } from './Reducers/index';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const middlewares = [thunk];
export default createStore(rootReducer, applyMiddleware(...middlewares));