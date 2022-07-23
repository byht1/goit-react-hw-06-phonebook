import { Filter } from './Phonebook/Filter/Filter';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactList/ContactList';
import { Section, Containet, H1, DivList } from './App.stiled';
// import { useEffect } from 'react';

// const L_KEY = 'contacts-list';
// const contactsList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function App() {
  return (
    <Section>
      <Containet>
        <div>
          <H1>Phonebook</H1>
          <ContactForm />
        </div>

        <DivList>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </DivList>
      </Containet>
    </Section>
  );
}
