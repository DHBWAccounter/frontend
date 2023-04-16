import axios, { AxiosInstance } from "axios";

export const BACKEND_BASE_URL = "http://localhost:80/web_test";

export default function getAxios(): AxiosInstance {
  const instance = axios.create();
  instance.defaults.baseURL = BACKEND_BASE_URL;
  instance.defaults.withCredentials = true;
  
  return instance;
}
