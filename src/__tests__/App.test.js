import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../Reducers';
import App from '../Components/App';
import {
  BrowserRouter as Router
} from "react-router-dom";

describe('rendered Main', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
  it('has a div with class container', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.container');
    expect(appElement).toBeInTheDocument();
  });
  it('has a text with class App-stong', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.App-strong');
    expect(appElement).toBeInTheDocument();
  });
  it('has a strong element with text Gotta Catch Em All', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('strong');
    expect(appElement).toHaveTextContent('Gotta Catch Em All!');
  });
  it('has an element with Pending text', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.pend');
    expect(appElement).toHaveTextContent('Pending');
  });
});