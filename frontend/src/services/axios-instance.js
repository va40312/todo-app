import axios from "axios";
import authStorage from "./auth-storage";

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 20000,
});

api.interceptors.request.use(
  async (config) => {
    let user = authStorage.getData();
    if (user && user.accessToken) {
      config.headers['x-access-token'] = user.accessToken;
      config.headers['authorization'] = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;