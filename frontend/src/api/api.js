import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7890/api",
});

// Export baseURL for use in other components
export const BASE_URL = "http://localhost:7890/api";

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
