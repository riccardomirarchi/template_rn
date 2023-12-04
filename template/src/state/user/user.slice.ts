import { createSlice } from '@reduxjs/toolkit';

export const KEY_USER_STORE = 'user';

const initialState = null;

export const tokenStore = createSlice({
  name: KEY_USER_STORE,
  initialState,
  reducers: {
    storeToken(_, action) {
      return action.payload;
    },
    resetToken() {
      return initialState;
    },
  },
});

export const { storeToken, resetToken } = tokenStore.actions;
