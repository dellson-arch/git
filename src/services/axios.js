// src/services/axios.js
import axios from 'axios';
import { env } from '@/config/env'; // Assuming you have env.js in your config folder

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;