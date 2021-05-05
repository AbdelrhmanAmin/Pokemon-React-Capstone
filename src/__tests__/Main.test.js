import React from 'react'
import { render, screen } from '../testUtils';
import Main from '../Components/Main';
import { Provider } from 'react-redux'
import store from '../store';

it('Renders the connected app with initialState', () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  screen.getByText(/Hey!/i);
});