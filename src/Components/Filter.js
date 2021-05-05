import { useDispatch } from 'react-redux';
import { pokeFilter } from '../Actions/action';
import '../btn.scss';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <div className="form__group field">
        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required onChange={(e) => {
          dispatch(pokeFilter(e.target.value))
        }} />
        <label htmlFor="name" className="form__label">Pika! Pika!</label>
      </div>
    </form >
  )
}
export default Filter;