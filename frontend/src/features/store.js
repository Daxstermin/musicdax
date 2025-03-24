import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import spotifyReducer from './spotifySlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    spotify: spotifyReducer,
  },
});
