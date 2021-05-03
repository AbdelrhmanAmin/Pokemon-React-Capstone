import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
const Preview = () => {
  const [pending, setPending] = useState(true)
  const pokes = useSelector(state => state.pokesReducer.pokes);
  const { id } = useParams();
  const dispatch = useDispatch();
  const poke = pokes.filter((x) => x.id.toString() === id)[0]
  setTimeout(() => setPending(false), 1000)
  useEffect(() => {
    dispatch(fetchPokes());
  }, [dispatch])
  return (
    <div>
      {console.log(poke, pending)}
      {
        !pending ?
          <div>
            <h3>{poke.name}</h3>
            <img width='100' src={poke.sprites.front_default} alt={poke.id} />
            <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} />
            <img width='100' src={poke.sprites.back_default} alt={poke.id} />
            {poke.abilities.map((ability) => {
              return (
                <div>
                  <strong>{ability.ability.name}</strong> <br />
                </div>
              )
            })}
          </div> :
          <h3>PENDING</h3>
      }
    </div>
  );
}

export default Preview;
