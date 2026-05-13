// src/features/settings/redux/settingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    profile: {
      name: 'Nayan',
      email: 'nayan@example.com',
      role: 'Full Stack Developer',
    },
    notifications: {
      emailAlerts: true,
      pushNotifications: false,
    },
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    toggleNotification: (state, action) => {
      const { field } = action.payload;
      state.notifications[field] = !state.notifications[field];
    },
  },
});

export const { updateProfile, toggleNotification } = settingsSlice.actions;
export default settingsSlice.reducer;