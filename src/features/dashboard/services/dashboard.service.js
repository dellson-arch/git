// src/features/dashboard/services/dashboard.service.js
import axiosInstance from "@/services/axios";

export const fetchAttendanceStats = async (period) => {
  const response = await axiosInstance.get(`/attendance/stats?period=${period}`);
  return response.data;
};