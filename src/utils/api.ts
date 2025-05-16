import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes
    if (error.response?.status === 401) {
      // Handle unauthorized (e.g., redirect to login)
      console.error('Authentication required');
    }
    return Promise.reject(error);
  }
);

export default api;
