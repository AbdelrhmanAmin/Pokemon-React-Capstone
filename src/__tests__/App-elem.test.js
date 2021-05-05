import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Reducers';
import App from '../Components/App';
describe('rendered App', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
  });
  it('has a div with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('div');
    expect(appElement).toBeInTheDocument();
  });
});