import axios from "axios";

// const isDevelopment = import.meta.env.MODE === 'development'
// const baseURL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD
const baseURL = import.meta.env.REACT_APP_API_URL
const api = axios.create({baseURL});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;