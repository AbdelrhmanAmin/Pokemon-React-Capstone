import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokes, pokeFilter, pokeLoading } from '../Actions/action';
import Filter from './Filter';
import red from '../ui/red.png';
import yellow from '../ui/yellow.png';
import silver from '../ui/silver.png';
import sky from '../ui/sky.png';
import gold from '../ui/gold.png';
import green from '../ui/green.png';
import orange from '../ui/orange.png';
import text from '../ui/text.png';

const Main = ({
  pokes, filterPokes, fetcher = fetchPokes(), loading = true,
}) => {
  const frames = [red, yellow, silver, sky, gold, green, orange];
  let i = 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcher);
    dispatch(pokeLoading(false));
  }, []);
  const handleFilterChange = ((e) => {
    dispatch(pokeFilter(e.target.value));
  });
  const filteredPokes = filterPokes === '' ? pokes : pokes.filter((x) => x.name.toLowerCase().includes(filterPokes.toLowerCase()));
  return (
    <div className="container">
      <div className="flex-img">
        <img src={text} alt="text-img" width="150" />
        <strong className="App-strong">Gotta Catch Em All!</strong>
      </div>
      {!loading
        ? (
          <div>
            <div />
            <Filter filterHandler={handleFilterChange} />
            <div className="grid-main">
              {filteredPokes.map((poke) => {
                i += 1;
                if (i === frames.length) {
                  i = 0;
                }
                return (
                  <Link to={{ pathname: `/${poke.id}`, state: { poke } }} className="link-bg" style={{ backgroundImage: `url(${frames[i]})` }} key={Math.random()}>
                    <figure className="tint">
                      <img src={poke.sprites.front_default} alt={poke.id} className="pokemon" />
                      <h3 className={`h-${i}`}>{poke.name}</h3>
                    </figure>
                  </Link>
                );
              })}
            </div>
          </div>
        )
        : (
          <div>
            <h1 className="pend">Loading...</h1>
            <span>{loading}</span>
            <img src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif" alt="gif" />
          </div>
        )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  pokes: state.pokesReducer.pokes,
  filterPokes: state.pokesReducer.filter,
  loading: state.pokesReducer.loading,
});

Main.propTypes = {
  pokes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterPokes: PropTypes.string,
  loading: PropTypes.bool,
  fetcher: PropTypes.exact({
    type: PropTypes.string,
    payload: PropTypes.array,
  }),
};

Main.defaultProps = {
  filterPokes: '',
  loading: true,
  fetcher: undefined,
};
export default connect(mapStateToProps, null)(Main);
