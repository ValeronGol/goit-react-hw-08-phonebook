import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.contacts;
export const getIsLoading = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.error;

const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
