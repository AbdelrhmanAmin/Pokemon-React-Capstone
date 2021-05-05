import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../Components/Filter';
import { Provider } from 'react-redux';
import store from '../Reducers';

describe('rendered Main', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
  })
  it('renders the input form', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('textbox', { name: 'Pika! Pika!' });
    expect(main).toBeInTheDocument();
  });
  it('has an input form with id name', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('#name');
    expect(appElement).toBeInTheDocument();
  });
  it('has a label form with text', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('label');
    expect(appElement).toHaveTextContent('Pika! Pika!');
  });
});