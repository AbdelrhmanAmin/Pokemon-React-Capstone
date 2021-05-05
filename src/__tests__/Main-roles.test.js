import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { fetchPokes } from '../Actions/action';
import store from '../Reducers';
import Main from '../Components/Main';
describe('rendered Main', () => {
  let renderedComponent;

  it('has a div with class App', async () => {
    const pokes = [{
      id: 30,
      name: 'nidorina',
      sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      },
      weight: 200,
      height: 8
    }];
    jest.useFakeTimers();
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Main pokes={pokes} filterPokes='' />
        </Provider>,
      );
      jest.advanceTimersByTime(2200);
    });
    const { getByRole } = renderedComponent;
    const main = getByRole('', { name: '' });
    expect(main).toBeInTheDocument();
  });
});