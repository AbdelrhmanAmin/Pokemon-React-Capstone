import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
const Main = () => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(true)
  setTimeout(() => setPending(false), 2000)
  const pokes = useSelector(state => state.pokesReducer.pokes);
  const filterPokes = useSelector(state => state.pokesReducer.filter);
  const frames = [red, yellow, silver, sky, gold, green, orange];
  let i = 0;
  useEffect(() => {
    dispatch(fetchPokes());
  }, [dispatch])
  const filteredPokes = filterPokes === '' ? pokes : pokes.filter((x) => x.name.toLowerCase().includes(filterPokes.toLowerCase()))
  return (
    <div className='container'>
      <strong className='App-strong'>Gotta Catch Em All!</strong>
      {!pending ?
        (
          <div>
            <Filter />
            <div className='grid-main'>
              {filteredPokes.map((poke) => {
                i += 1;
                if (i === frames.length) {
                  i = 0;
                }
                return (
                  <Link to={`/${poke.id}`} className='link-bg' style={{ backgroundImage: `url(${frames[i]})` }}>
                    <figure className="tint">
                      <img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} className='pokemon' />
                      <h3>{poke.name}</h3>
                    </figure>
                  </Link>
                )
              })}
            </div>
          </div>
        )
        : <h1 className='pend'>Pending</h1>
      }
    </div>
  );
}
export default Main;
