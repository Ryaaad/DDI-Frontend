import axios, { type AxiosInstance } from "axios";

export const BASE_URL =
  import.meta.env.VITE_PUBLIC_API_URL || import.meta.env.VITE_PUBLIC_HOSTED_URL;

console.log(" BASE_URL : ", BASE_URL);

export const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true,
});

export const axiosAuthClient: AxiosInstance = axiosClient;
