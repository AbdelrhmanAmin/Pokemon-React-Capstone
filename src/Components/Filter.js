import { useDispatch } from 'react-redux';
import { pokeFilter } from '../Actions/action';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <input type='text' onChange={(e) => {
        dispatch(pokeFilter(e.target.value))
      }} />
    </form>
  )
}
export default Filter;