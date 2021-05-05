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
      <strong className='App-strong'>Gotta Catch Em All!</strong>
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
                  <Link to={`/${poke.id}`} className='link-bg' style={{ backgroundImage: `url(${frames[i]})` }} key={Math.random()}>
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
        : <h1 className='pend'>Pending</h1>
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
