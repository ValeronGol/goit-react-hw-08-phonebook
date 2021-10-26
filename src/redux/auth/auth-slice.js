import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
    },
    [authOperations.register.pending](state, action) {
      state.isError = false;
    },
    [authOperations.register.rejected](state, action) {
      state.isError = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
    },
    [authOperations.logIn.pending](state, action) {
      state.isError = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isError = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isError = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isError = false;
    },
  },
});

export default authSlice.reducer;
