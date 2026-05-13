// src/features/reports/redux/reportSlice.js
import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'reports',
  initialState: {
    availableReports: [
      { id: 'att-01', title: 'Monthly Attendance', category: 'Attendance', lastGenerated: '2026-05-01' },
      { id: 'pay-02', title: 'Tax Summary Q1', category: 'Payroll', lastGenerated: '2026-04-15' },
      { id: 'rec-03', title: 'Hiring Pipeline', category: 'Recruitment', lastGenerated: '2026-05-10' },
      { id: 'emp-04', title: 'Employee Turnover', category: 'Management', lastGenerated: '2026-05-12' },
    ],
    isGenerating: false,
  },
  reducers: {
    setGenerating: (state, action) => {
      state.isGenerating = action.payload;
    },
  },
});

export const { setGenerating } = reportSlice.actions;
export default reportSlice.reducer;