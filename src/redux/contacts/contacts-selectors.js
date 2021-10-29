import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.contacts;
export const getIsLoading = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.error;

export const getVisibleContacts = createSelector(
  getContacts,
  state => state.phonebook.filter,
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
