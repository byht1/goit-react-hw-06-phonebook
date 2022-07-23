import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './itemsContact';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
