import axios from "axios";
import { API_URL } from "../config";

const createAxiosInstance = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "any",
    },
  });
};

export const useHttp = () => {
  const axiosInstance = createAxiosInstance();

  const sendRequest = async ({
    url,
    method = "GET",
    data = null,
    params = {},
  }) => {
    try {
      const response = await axiosInstance({
        url,
        method,
        data,
        params,
      });
      return response.data;
    } catch (error) {
      // Handle or throw the error as needed
      console.error("HTTP request failed:", error);
      throw error;
    }
  };

  return sendRequest;
};
