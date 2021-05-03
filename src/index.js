import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { rootReducer } from './Reducers/index';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
