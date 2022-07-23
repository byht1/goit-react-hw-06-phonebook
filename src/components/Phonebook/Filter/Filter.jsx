import { useSelector, useDispatch } from 'react-redux';
import { Input, Span } from './Filter.styled';
import { filterValue, getFilter } from 'redux/itemsContact';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label htmlFor="filter">
      <Span>Find contacts by name</Span>
      <Input
        onChange={event =>
          dispatch(filterValue(event.target.value.toLowerCase()))
        }
        type="filter"
        value={filter}
        name="filter"
      />
    </label>
  );
};
