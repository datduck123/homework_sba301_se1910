import axios from "axios";

const rawUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "http://localhost:8080";
const baseUrl = rawUrl.replace(/\/orchids\/?$/, "").replace(/\/+$/, "");
const API_URL = `${baseUrl}/categories`;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" }
});

export const getCategories = () => {
  return api.get("/");
};
export const getCategory = (id) => api.get(`/${id}`);

export default api;
