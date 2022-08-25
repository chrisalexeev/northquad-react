import { configureStore } from '@reduxjs/toolkit';
import songListReducer from '../features/songList/songListSlice';
import settingsReducer from '../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    songList: songListReducer,
    settings: settingsReducer
  },
});
