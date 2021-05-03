import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
import Filter from './Filter';
import { Link } from "react-router-dom";
import red from '../ui/red.png';
import yellow from '../ui/yellow.png';
import silver from '../ui/silver.png';
import black from '../ui/black.png';
import gold from '../ui/gold.png';
const Main = () => {
  const dispatch = useDispatch();
  const pending = useSelector(state => state.pokesReducer.pending);
  const pokes = useSelector(state => state.pokesReducer.pokes);
  const filterPokes = useSelector(state => state.pokesReducer.filter);
  useEffect(() => {
    dispatch(fetchPokes());
  }, [dispatch])
  const filteredPokes = filterPokes === '' ? pokes : pokes.filter((x) => x.name.toLowerCase().includes(filterPokes.toLowerCase()))
  return (
    <div>
      <Filter />
      <div className='grid-main'>
        {!pending ? filteredPokes.map((poke) => {
          const frames = [red, gold, black, silver, yellow];
          let frame = red;
          for (let i = 0; i < frames.length; i++) {
            frame = frames[i];
            if (i === (frames.length - 1)) {
              i = 0;
            }
          }
          return (
            <Link to={`/${poke.id}`} className='link-bg' style={{ backgroundImage: `url(${frame})` }}>
              <figure class="tint">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} className='pokemon' />
                <h3>{poke.name}</h3>
              </figure>

            </Link>
          )
        }
        ) : <h3>Pending</h3>}
      </div>
    </div>
  );
}
export default Main;
