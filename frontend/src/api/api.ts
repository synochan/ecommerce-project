import axios from "axios"
import { ACCESS_TOKEN } from "./constants"
import { API_BASE_URL } from "./constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(`Response error [${error.response?.status}]:`, error.response?.data);
    return Promise.reject(error);
  }
);

export default api
