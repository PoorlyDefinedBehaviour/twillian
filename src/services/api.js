import axios from 'axios';
import { isAuthenticated, getToken, logout } from './auth';

const api = axios.create({
  baseURL: 'https://twillian-api.herokuapp.com/api/'
});

api.interceptors.request.use(config => {
  if (isAuthenticated()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }

  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401 && isAuthenticated()) {
      logout();
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default api;
