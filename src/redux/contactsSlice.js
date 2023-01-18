import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsInitialState,
  },
  reducers: {
    addContactAction(state, action) {
      console.log(action);
      state.contacts.push(action.payload);
    },
    deleteContactAction(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContactAction, deleteContactAction } = contactSlice.actions;
