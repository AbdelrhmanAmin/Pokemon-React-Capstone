import React from 'react';
import PropTypes from 'prop-types';
import {
  useLocation,
} from 'react-router-dom';
import icon from '../ui/ability.png';
import fire from '../ui/fire.png';
import home from '../ui/home.png';
import github from '../ui/github.png';

const Preview = ({ poke }) => {
  if (poke === undefined) {
    const location = useLocation();
    // eslint-disable-next-line no-param-reassign
    poke = location.state.poke;
  }
  return (
    <div className="preview-container">
      <a href="/"><img className="icon-home" alt="icon" src={home} /></a>
      <a href="https://github.com/AbdelrhmanAmin/Pokemon-React-Capstone" target="_blank" rel="noreferrer"><img className="icon-github" alt="icon" src={github} /></a>
      <div>
        <h3 className="poke-name">{poke.name}</h3>
        <div className="poke-imgs">
          <img width="120" src={poke.sprites.front_default} alt="poke-front" />
          <img width="100" src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt="poke-img" />
          <img width="120" src={poke.sprites.back_default} alt="poke-back" />
        </div>
        <div className="preview-flex">
          <div className="icon-ability">
            <img src={icon} alt="ability" className="icon ability-icon-img" />
            <strong>ABILITIES:</strong>
          </div>
          <div className="flex-right">
            <strong className="right w">
              Weight:
              {poke.weight}
            </strong>
            <strong className="right h">
              Height:
              {poke.height}
            </strong>
          </div>
        </div>
        <ul className="abilities-list">
          {poke.abilities.map((ability) => (
            <li className="ability-list" key={Math.random()}>
              <img src={fire} alt="fire" className="fire" />
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Preview.propTypes = {
  poke: PropTypes.exact({
    name: PropTypes.string,
    sprites: PropTypes.array,
    id: PropTypes.number,
    height: PropTypes.number,
    weight: PropTypes.number,
    abilities: PropTypes.array,
  }).isRequired,
};

export default Preview;
