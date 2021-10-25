import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/auth/auth-operations';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);
    try {
      const user = await axios.get('/contacts');
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', {
        name,
        number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
