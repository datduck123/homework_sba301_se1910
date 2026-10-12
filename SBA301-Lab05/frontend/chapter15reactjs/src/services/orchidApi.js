import axios from "axios";

const rawUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";
const defaultOrchidUrl = `${rawUrl.replace(/\/+$/, "")}/orchids`;
const API_URL = import.meta.env.VITE_API_URL || defaultOrchidUrl;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" }
});

export const getOrchids = () => api.get("/");
export const getOrchid = (id) => api.get(`/${id}`);
export const createOrchid = (payload) => api.post("/", payload);
export const updateOrchid = (id, payload) => api.put(`/${id}`, payload);
export const deleteOrchid = (id) => api.delete(`/${id}`);

export default api;
