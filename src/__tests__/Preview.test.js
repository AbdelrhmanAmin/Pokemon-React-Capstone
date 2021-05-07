import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Preview from '../Components/Preview';

describe('rendered Preview elements', () => {
  let renderedComponent;
  beforeEach(() => {
    const poke = {
      id: 30,
      name: 'nidorina1',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      weight: 200,
      height: 8,
    };
    act(() => {
      renderedComponent = render(
        <Router>
          <Preview poke={poke} />
        </Router>,
      );
    });
  });
  it('has an img with class icon-home', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.icon-home');
    expect(appElement).toBeInTheDocument();
  });
  it('has an img with class icon-github', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.icon-github');
    expect(appElement).toBeInTheDocument();
  });
  it('has a div that contains 3 images', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.poke-imgs');
    expect(appElement).not.toBeEmptyDOMElement();
  });
  it('has a div with class icon-ability that has 2 elements', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.icon-ability');
    expect(appElement).not.toBeEmptyDOMElement();
  });
  it('has a strong element that displays weight', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.w');
    expect(appElement).toHaveTextContent('200');
  });
  it('has a strong element that displays height', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.h');
    expect(appElement).toHaveTextContent('8');
  });
  it('has a list that displays abilities', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.ability-list');
    expect(appElement).not.toBeEmptyDOMElement();
  });
});

describe('rendered Preview roles', () => {
  let renderedComponent;
  beforeEach(() => {
    const poke = {
      id: 30,
      name: 'nidorina1',
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
      },
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      weight: 200,
      height: 8,
    };
    act(() => {
      renderedComponent = render(
        <Router>
          <Preview poke={poke} />
        </Router>,
      );
    });
  });
  it('renders the link for the icon', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('link', { name: 'icon' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the img icon', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('img', { name: 'icon' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders poke img front view', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'poke-front' });
    expect(main).toBeInTheDocument();
  });
  it('renders poke img main view', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'poke-img' });
    expect(main).toBeInTheDocument();
  });
  it('renders poke img back view', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'poke-back' });
    expect(main).toBeInTheDocument();
  });
  it('renders poke ability img', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'ability' });
    expect(main).toBeInTheDocument();
  });
  it('renders poke fire img', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('img', { name: 'fire' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders header with name of the poke', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'nidorina1' });
    expect(main).toBeInTheDocument();
  });
  it('renders the list of abilities', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('listitem', { name: '' })[0];
    expect(main).toBeInTheDocument();
  });
});
