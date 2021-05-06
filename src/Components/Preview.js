/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
import icon from '../ui/ability.png'
import fire from '../ui/fire.png'
import home from '../ui/home.png'
import github from '../ui/github.png'
const Preview = ({ pokes, fetcher = fetchPokes(), id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1) }) => {
  const [pending, setPending] = useState(true)
  const poke = pokes.filter((x) => x.id.toString() === id.toString())[0]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcher)
    let timer1 = setTimeout(() => {
      setPending(false)
    }, 2000)
    return () => {
      clearTimeout(timer1);
    };
  }, [])
  return (
    <div className='preview-container' >
      <a href='/'><img className='icon-home' alt='icon' src={home} /></a>
      <a href='https://github.com/AbdelrhmanAmin/Pokemon-React-Capstone' target="_blank" rel="noreferrer"><img className='icon-github' alt='icon' src={github} /></a>
      {
        !pending ?
          <div>
            <h3 className='poke-name'>{poke.name}</h3>
            <div className='poke-imgs'>
              <img width='120' src={poke.sprites.front_default} alt='poke-front' />
              <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt='poke-img' />
              <img width='120' src={poke.sprites.back_default} alt='poke-back' />
            </div>
            <div className='preview-flex'>
              <div className='icon-ability'>
                <img src={icon} alt='ability' className='icon' />
                <strong>ABILITIES:</strong>
              </div>
              <div className='flex-right'>
                <strong className='right w'>Weight: {poke.weight}</strong>
                <strong className='right h'>Height: {poke.height}</strong>
              </div>
            </div>
            <ul className='abilities-list'>
              {poke.abilities.map((ability) => {
                return (
                  <li className='ability-list' key={Math.random()}>
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
const mapStateToProps = (state) => {
  return {
    pokes: state.pokesReducer.pokes,
  }
}
export default connect(mapStateToProps, null)(Preview);
