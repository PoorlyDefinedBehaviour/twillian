import axios from 'axios';

import { isAuthenticated, getToken } from './auth';

const api = axios.create({
  baseURL: 'https://twillian-api.herokuapp.com/api/',
});

api.interceptors.request.use(async (config) => {
  if (await isAuthenticated()) {
    config.headers.Authorization = `Bearer ${await getToken()}`;
  }

  return config;
});

export default api;
