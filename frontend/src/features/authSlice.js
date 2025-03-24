import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('spotifyToken') || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('spotifyToken', action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('spotifyToken');
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
