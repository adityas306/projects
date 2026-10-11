
import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api"
  || "https://projects-1-q1z4.onrender.com/";

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
