import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
import icon from '../ui/ability.png'
import fire from '../ui/fire.png'
import home from '../ui/home.png'
import github from '../ui/github.png'
const Preview = () => {
  const [pending, setPending] = useState(true)
  const pokes = useSelector(state => state.pokesReducer.pokes);
  const { id } = useParams();
  const dispatch = useDispatch();
  const poke = pokes.filter((x) => x.id.toString() === id)[0]
  setTimeout(() => setPending(false), 2000)
  useEffect(() => {
    dispatch(fetchPokes());
  }, [dispatch])
  return (
    <div className='preview-container' >
      <a href='/'><img className='icon-home' alt='icon' src={home} /></a>
      <a href='https://github.com/AbdelrhmanAmin/Pokemon-React-Capstone' target="#"><img className='icon-github' alt='icon' src={github} /></a>
      {
        !pending ?
          <div>
            <h3 className='poke-name'>{poke.name}</h3>
            <div className='poke-imgs'>
              <img width='120' src={poke.sprites.front_default} alt={poke.id} />
              <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} />
              <img width='120' src={poke.sprites.back_default} alt={poke.id} />
            </div>
            <div className='icon-ability'>
              <img src={icon} alt='ability' className='icon' />
              <strong>ABILITIES:</strong>
            </div>
            <ul className='abilities-list'>
              {poke.abilities.map((ability) => {
                return (
                  <li className='ability-list'>
                    <img src={fire} alt='fire' className='fire' />{ability.ability.name}
                  </li>
                )
              })}
            </ul>
          </div> :
          <h3 className='pend'>PENDING</h3>
      }
    </div>
  );
}

export default Preview;
