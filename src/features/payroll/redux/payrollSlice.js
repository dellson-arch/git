// src/features/payroll/redux/payrollSlice.js
import { createSlice } from '@reduxjs/toolkit';

const payrollSlice = createSlice({
  name: 'payroll',
  initialState: {
    history: [
      { id: 1, month: 'April 2026', amount: '₹85,000', status: 'Paid', date: '2026-04-30' },
      { id: 2, month: 'March 2026', amount: '₹85,000', status: 'Paid', date: '2026-03-31' },
    ],
    loading: false,
    grossAnnualSalary: '₹10,20,000',
  },
  reducers: {
    setPayrollHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { setPayrollHistory } = payrollSlice.actions;
export default payrollSlice.reducer;