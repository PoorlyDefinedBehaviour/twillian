import axios from "axios";

const api = axios.create({
  baseURL: "https://twillian-api.herokuapp.com/api/"
});

export default api;
