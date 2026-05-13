// src/features/dashboard/redux/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    activeTab: 'ESS DASHBOARD',
    attendanceData: [
      { status: 'Present', value: 60 },
      { status: 'Early', value: 85 },
      { status: 'Present', value: 40 },
      { status: 'Present', value: 95 },
      // ... more data points
    ],
    loading: false,

  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setAttendanceData: (state, action) => {
      state.attendanceData = action.payload;
    },
  },
});

export const { setActiveTab , setAttendanceData } = dashboardSlice.actions;
export default dashboardSlice.reducer;