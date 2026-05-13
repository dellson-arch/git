// src/features/recruitment/redux/recruitmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const recruitmentSlice = createSlice({
  name: 'recruitment',
  initialState: {
    jobs: [],
    loading: false,
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.unshift({
        id: Date.now(),
        applicants: 0,
        status: 'Open',
        ...action.payload // Takes title and department from the UI
      });
    },
    // Action to remove a job post
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { addJob, deleteJob , setJobs } = recruitmentSlice.actions;
export default recruitmentSlice.reducer;