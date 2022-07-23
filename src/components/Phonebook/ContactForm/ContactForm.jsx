import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Span, Input, Button, Form } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default function ContactForm({ newC }) {
  const [{ name, number }, setState] = useState(INITIAL_STATE);

  function onChange(eve) {
    const { name, value } = eve.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  function onSubmit(eve) {
    eve.preventDefault();
    const newContacts = {
      id: nanoid(5),
      name,
      number,
    };
    const isUnique = newC(newContacts);

    if (isUnique) {
      setState({ ...INITIAL_STATE });
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="name">
        <Span>Name</Span>
        <Input
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Rosie Simpson"
        />
      </label>

      <label htmlFor="number">
        <Span>Number</Span>
        <Input
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="645-17-79"
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  newC: PropTypes.func.isRequired,
};
