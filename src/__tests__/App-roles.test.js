import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../Components/App';
import store from '../Reducers/';
describe('rendered Display', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
  it('has a main role with no name', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Pending' });
    expect(main).toBeInTheDocument();
  });
});