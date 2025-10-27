// src/config/axios.ts (или где у вас этот файл)

import axios from "axios";
import { BACKEND_URL } from "./config";

const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const getXsrfToken = () => {
      const cookies = document.cookie.split(";");
      for (const cookie of cookies) {
        const parts = cookie.trim().split("=");
        if (parts[0] === "XSRF-TOKEN") {
          return decodeURIComponent(parts[1]);
        }
      }
      return null;
    };

    const token = getXsrfToken();

    if (token) {
      config.headers["X-XSRF-TOKEN"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
