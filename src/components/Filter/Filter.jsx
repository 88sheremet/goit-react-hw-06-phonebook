import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Filter = ({  onChangeFilter }) => {

  const filter = useSelector(state => state.filter)
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={filter}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  // value: Proptypes.string,
  onChangeFilter: Proptypes.func.isRequired,
};
