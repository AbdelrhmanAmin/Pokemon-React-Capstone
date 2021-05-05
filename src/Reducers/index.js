import { combineReducers } from 'redux';
import { pokesReducer } from './reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const middlewares = [thunk];
export const rootReducer = combineReducers({ pokesReducer })
export default createStore(rootReducer, applyMiddleware(...middlewares)); 