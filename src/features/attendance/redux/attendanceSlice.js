// src/features/attendance/redux/attendanceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: {
    logs: [],
    loading: false,
    isPunchedIn: false,
  },
  reducers: {
   punchIn: (state) => {
      state.isPunchedIn = true;
      state.logs.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString(),
        type: 'In',
        status: 'Present'
      });
    },
    punchOut: (state) => {
      state.isPunchedIn = false;
      state.logs.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
        time: new Date().toLocaleTimeString(),
        type: 'Out',
        status: 'Left'
      });
    },
    updateAttendance: (state, action) => {
      state.logs = action.payload;
    },
  },
});

export const { punchIn, punchOut , updateAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;