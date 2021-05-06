/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
import Filter from './Filter';
import { Link } from "react-router-dom";
import red from '../ui/red.png';
import yellow from '../ui/yellow.png';
import silver from '../ui/silver.png';
import sky from '../ui/sky.png';
import gold from '../ui/gold.png';
import green from '../ui/green.png';
import orange from '../ui/orange.png';
import text from '../ui/text.png';
const Main = ({ pokes, filterPokes, fetcher = fetchPokes() }) => {
  const [pending, setPending] = useState(true)
  const frames = [red, yellow, silver, sky, gold, green, orange];
  let i = 0;
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
  const filteredPokes = filterPokes === '' ? pokes : pokes.filter((x) => x.name.toLowerCase().includes(filterPokes.toLowerCase()))
  return (
    <div className='container'>
      <div className='flex-img'>
        <img src={text} alt='text-img' width='150' />
        <strong className='App-strong'>Gotta Catch Em All!</strong>
      </div>
      {!pending ?
        (
          <div>
            <div>
            </div>
            <Filter />
            <div className='grid-main'>
              {filteredPokes.map((poke) => {
                i += 1;
                if (i === frames.length) {
                  i = 0;
                }
                return (
                  <Link to={{ pathname: `/${poke.id}`, state: { poke: poke } }} className='link-bg' style={{ backgroundImage: `url(${frames[i]})` }} key={Math.random()}>
                    <figure className="tint">
                      <img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} className='pokemon' />
                      <h3 className={`h-${i}`}>{poke.name}</h3>
                    </figure>
                  </Link>
                )
              })}
            </div>
          </div>
        )
        : <div>
          <h1 className='pend'>Loading...</h1>
          <img src='https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif' alt='gif' />
        </div>
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    pokes: state.pokesReducer.pokes,
    filterPokes: state.pokesReducer.filter,
  }
}
export default connect(mapStateToProps, null)(Main);
