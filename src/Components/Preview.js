import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
const Preview = () => {
  const [pending, setPending] = useState(true)
  const pokes = useSelector(state => state.pokesReducer.pokes);
  const { id } = useParams();
  const dispatch = useDispatch();
  const poke = pokes.filter((x) => x.id.toString() === id)
  setTimeout(() => setPending(false), 500)
  useEffect(() => {
    dispatch(fetchPokes());
  }, [dispatch])
  return (
    <div>
      {console.log(poke, pending)}
      {
        !pending ?
          <div>
            <h3>{poke[0].name}</h3>
            <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${poke[0].id}.png`} alt={poke[0].id} />
          </div> :
          <h3>PENDING</h3>
      }
    </div>
  );
}

export default Preview;
