// src/features/employees/redux/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    // This adds the employee to your local frontend state
    addEmployee: (state, action) => {
      state.list.push({
        id: Date.now(), // Unique ID for the demo
        status: 'Active',
        joined: new Date().toISOString().split('T')[0], // Today's date
        ...action.payload
      });
    },
    setEmployees: (state, action) => {
      state.list = action.payload;
    },
    updateEmployee: (state, action) => {
      const index = state.list.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
  },
});

export const { addEmployee,setEmployees,updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;