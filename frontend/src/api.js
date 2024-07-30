import axios from "axios";

console.log(import.meta.env.MODE)
console.log(import.meta.env)
const isDevelopment = import.meta.env.MODE === 'development'
const baseURL = isDevelopment ? import.meta.env.VITE_API_URL_DEVELOPMENT : import.meta.env.VITE_API_URL_PRODUCTION
const api = axios.create({baseURL});
console.log(baseURL)

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