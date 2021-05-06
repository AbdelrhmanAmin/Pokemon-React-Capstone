import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import pokesReducer from './reducer';

const middlewares = [thunk];
export const rootReducer = combineReducers({ pokesReducer });
export default createStore(rootReducer, applyMiddleware(...middlewares));
