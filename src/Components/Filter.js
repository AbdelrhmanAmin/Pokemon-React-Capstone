/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

const Filter = ({ filterHandler }) => (
  <form>
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder="Name"
        name="name"
        id="name"
        required
        onChange={(e) => {
          filterHandler(e);
        }}
      />
      <label htmlFor="name" className="form__label">
        Pika! Pika!
      </label>
    </div>
  </form>
);
Filter.propTypes = {
  filterHandler: PropTypes.func,
};
Filter.defaultProps = {
  filterHandler: undefined,
};
export default Filter;
