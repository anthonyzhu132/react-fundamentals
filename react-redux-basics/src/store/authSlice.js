import { createSlice } from '@reduxjs/toolkit';

const intialAuthState = {
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

export const authActions = authSlice.actions;