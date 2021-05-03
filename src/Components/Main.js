import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokes } from '../Actions/action';
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
      {!pending ? filteredPokes.map((poke) => {
        return (
          <div>
            <h3>{poke.name}</h3>
            <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt={poke.id} />
          </div>
        )
      }
      ) : <h3>Pending</h3>}
    </div>
  );
}
// const mapStateToProps = state => {
//   return {
//     pokes: state.pokesReducer.pokes,
//     pending: state.pokesReducer.pending
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPokes: () => dispatch(fetchPokes())
//   }
// }
export default Main;
