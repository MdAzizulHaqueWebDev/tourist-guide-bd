/** @format */

import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
	baseURL: "https://assign-ment-12-server-side.vercel.app",
});
const useAxiosSecureInstance = () => {
	const navigate = useNavigate();
	// Add a request interceptor
	axiosInstance.interceptors.request.use(
		(config) => {
			// Do something before request is sent
			config.headers.authorization_token = `Bearer ${localStorage.getItem(
				"access-token",
			)}`;
			return config;
		},
		(error) => {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	axiosInstance.interceptors.response.use(
		(response) => response,
		(error) => {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			console.log(error);
			return;
		},
	);
	return axiosInstance;
};

export default useAxiosSecureInstance;
