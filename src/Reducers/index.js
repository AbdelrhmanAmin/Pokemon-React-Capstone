import { combineReducers } from 'redux';
import { pokesReducer } from './reducer';
export const rootReducer = combineReducers({ pokesReducer })