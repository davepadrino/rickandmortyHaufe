import axios from "axios";

export const API_URL = "http://localhost:9000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenChallenge");
  config.headers.Authorization = token;
  return config;
});

export default axiosInstance;
