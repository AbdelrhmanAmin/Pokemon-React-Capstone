// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// Import your own reducer
import reducer from './Reducers/index';
import { thunk } from './thunkMock';

const render = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.defaultProps = {
    children: '',
  };

  Wrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object]),
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };