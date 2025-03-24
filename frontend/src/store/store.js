import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/playerSlice';
import authReducer from './slices/authSlice';

export default configureStore({
  reducer: {
    player: playerReducer,
    auth: authReducer,
  },
});
