import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ onRemoveContact }) => {
  
  const contactsArr = useSelector(state => {
    return state.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  });

  return (
    <>
      <ul>
        {contactsArr.map(contact => (
          <li key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={css.buttonDel}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
};
