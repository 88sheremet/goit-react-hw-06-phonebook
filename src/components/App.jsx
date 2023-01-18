import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addContactAction, deleteContactAction } from 'redux/contactsSlice';
import { filterChange } from 'redux/filterSlice';

export const App = () => {

  const contactsObj = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = number => {
    // console.log(number);
    const searchRepeat = contactsObj.some(
      user => user.name.toLowerCase() === number.name.toLowerCase()
    );

    if (searchRepeat) {
      alert(`${number.name} is already in contacts`);
    } else {
      const contact = {
        ...number,
        id: nanoid(),
      };
      dispatch(addContactAction(contact));
      // setContacts(prevState => [...prevState, contact]);
    }
  };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const changeFilter = filter => {


  dispatch(filterChange(filter))
  };

  const removeContact = contactId => {
    dispatch(deleteContactAction(contactId));

  };

  return (
    <>
      <div>
        <h1>Phonebook:</h1>
        <ContactForm addContact={addContact} />

        <h2>Contacts:</h2>
        <Filter  onChangeFilter={changeFilter} />
        <ContactList
          // contacts={getFilteredContacts()}
          onRemoveContact={removeContact}
        />
      </div>
    </>
  );
};
