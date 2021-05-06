import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { pokeSuccess } from '../Actions/action';
import store from '../Reducers';
import Main from '../Components/Main';

describe('rendered Main elements', () => {
  let renderedComponent;
  beforeEach(() => {
    const pokes = [{
      id: 30,
      name: 'nidorina1',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      weight: 200,
      height: 8,
    }, {
      id: 30,
      name: 'nidorina2',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      weight: 200,
      height: 8,
    }, {
      id: 30,
      name: 'nidorina3',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      weight: 200,
      height: 8,
    }];
    jest.useFakeTimers();
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Router>
            <Main pokes={pokes} filterPokes="" fetcher={pokeSuccess(pokes)} />
          </Router>
        </Provider>,
      );
      jest.advanceTimersByTime(2200);
    });
  });
  it('has a figure with class tint', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.tint');
    expect(appElement).toBeInTheDocument();
  });
  it('has an img with class pokemon', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.pokemon');
    expect(appElement).toBeInTheDocument();
  });
  it('has a header element with first pokemon name', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.h-1');
    expect(appElement).toHaveTextContent('nidorina1');
  });
  it('has a header element with second pokemon name', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.h-2');
    expect(appElement).toHaveTextContent('nidorina2');
  });
  it('has a header element with third pokemon name', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.h-3');
    expect(appElement).toHaveTextContent('nidorina3');
  });

  it('renders the bg', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.link-bg');
    expect(appElement).toBeInTheDocument();
  });
});
describe('rendered Main roles', () => {
  let renderedComponent;
  beforeEach(() => {
    const pokes = [{
      id: 30,
      name: 'nidorina1',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      weight: 200,
      height: 8,
    }, {
      id: 30,
      name: 'nidorina2',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      weight: 200,
      height: 8,
    }, {
      id: 30,
      name: 'nidorina3',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      weight: 200,
      height: 8,
    }];
    jest.useFakeTimers();
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Router>
            <Main pokes={pokes} filterPokes="" fetcher={pokeSuccess(pokes)} />
          </Router>
        </Provider>,
      );
      jest.advanceTimersByTime(2200);
    });
  });
  it('renders the input form', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('textbox', { name: 'Pika! Pika!' });
    expect(main).toBeInTheDocument();
  });
  it('renders the data', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'nidorina1' });
    expect(main).toBeInTheDocument();
  });
  it('renders first poke to be there', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'nidorina1' });
    expect(main).toBeInTheDocument();
  });
  it('renders second poke to be there', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'nidorina2' });
    expect(main).toBeInTheDocument();
  });
  it('renders third poke to be there', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'nidorina3' });
    expect(main).toBeInTheDocument();
  });
});
