import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from 'redux/contacts/contacts-actions';
import {
  addContact,
  fetchContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';

const filterReducer = createReducer('', {
  [filterContact]: (_state, { payload }) => payload,
});

export const contactsReducer = createReducer([], {
  [fetchContact.fulfilled]: (_state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const errorReducer = createReducer(null, {
  [fetchContact.rejected]: (_state, { payload }) => payload,
  [fetchContact.pending]: () => false,
  [addContact.rejected]: (_state, { payload }) => payload,
  [addContact.pending]: () => false,
  [deleteContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.pending]: () => false,
});

export const isLoading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoading,
  error: errorReducer,
});
