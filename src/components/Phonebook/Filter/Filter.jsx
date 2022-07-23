import PropTypes from 'prop-types';
import { Input, Span } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <label htmlFor="filter">
      <Span>Find contacts by name</Span>
      <Input onChange={onChange} type="filter" name="filter" />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
