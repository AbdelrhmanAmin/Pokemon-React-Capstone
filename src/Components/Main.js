import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
import Filter from './Filter';
import { Link } from "react-router-dom";
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
      {!pending ? filteredPokes.map((poke) => {
        return (
          <Link to={`/${poke.id}`}>
            <h3>{poke.name}</h3>
            <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} />
          </Link>
        )
      }
      ) : <h3>Pending</h3>}
    </div>
  );
}
export default Main;
