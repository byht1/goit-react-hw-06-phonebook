import React, { useState, useEffect } from 'react';
import { Filter } from './Phonebook/Filter/Filter';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactList/ContactList';
import { Section, Containet, H1, DivList } from './App.stiled';

const L_KEY = 'contacts-list';
const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(L_KEY)) ?? contactsList
  );
  const [fillet, setFillet] = useState('');

  useEffect(() => {
    localStorage.setItem(L_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function contactsFillet() {
    if (fillet === '') {
      return false;
    }

    return contacts.filter(x => x.name.toLowerCase().includes(fillet));
  }

  function newC(newObj) {
    if (contacts.some(x => x.name === newObj.name)) {
      alert(`${newObj.name} is already is contacts`);
      return false;
    }
    setContacts(prevState => [...prevState, newObj]);
    return true;
  }

  function onCahangeFilter(event) {
    setFillet(event.target.value.toLowerCase());
  }

  function deleteContacts(event) {
    setContacts(prev => prev.filter(x => x.id !== event.target.name));
  }

  const fillter = contactsFillet();
  return (
    <Section>
      <Containet>
        <div>
          <H1>Phonebook</H1>
          <ContactForm newC={newC} />
        </div>

        <DivList>
          <h2>Contacts</h2>
          <Filter onChange={onCahangeFilter} />
          <ContactList contacts={contacts} deleteContacts={deleteContacts} />
        </DivList>
      </Containet>
    </Section>
  );
}
