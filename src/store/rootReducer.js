// src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import dashboardReducer from '@/features/dashboard/redux/dashboardSlice';
import settingsReducer from '@/features/settings/redux/settingsSlice';
import employeeReducer from '@/features/employee/redux/employeeSlice';
import attendanceReducer from '@/features/attendance/redux/attendanceSlice';
import payrollReducer from '@/features/payroll/redux/payrollSlice';
import recruitmentReducer from '@/features/recruitment/redux/recruitmentSlice';
import authReducer from "@/features/auth/redux/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  settings: settingsReducer,
  employees: employeeReducer,
  attendance: attendanceReducer,
  payroll: payrollReducer,
  recruitment: recruitmentReducer,
});

export default rootReducer;