import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'redux/contactsSlice';
import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contactsArr = useSelector(state => state.contacts.contacts);
  const filteredContactsArr = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  const removeContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  return (
    <>
      <ul>
        {filteredContactsArr.map(contact => (
          <li key={contact.name}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={css.buttonDel}
              type="button"
              name="delete"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
