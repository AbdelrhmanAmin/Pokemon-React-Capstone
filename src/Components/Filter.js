import { useDispatch } from 'react-redux';
import { pokeFilter } from '../Actions/action';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" name="name" id='name' required onChange={(e) => {
          dispatch(pokeFilter(e.target.value))
        }} />
        <label for="name" class="form__label">Pika! Pika!</label>
      </div>
    </form>
  )
}
export default Filter;