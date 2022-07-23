import React from 'react';
import PropTypes from 'prop-types';
import { NameContacts, List, Elements, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteC, getFilter, getItem } from 'redux/itemsContact';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  function contactsFillet() {
    if (filter === '') {
      return false;
    }

    return contacts.filter(x => x.name.toLowerCase().includes(filter));
  }

  const fillter = contactsFillet();

  const list = fillter ? fillter : contacts;

  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Elements key={id}>
          <NameContacts>
            {name}: {number}
          </NameContacts>
          <Button
            type="button"
            name={id}
            onClick={event => dispatch(deleteC(event.target.name))}
          >
            Delete
          </Button>
        </Elements>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
