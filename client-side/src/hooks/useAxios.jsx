/** @format */

import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://assign-ment-12-server-side.vercel.app",
});
const useAxios = () => {
	return axiosInstance;
};

export default useAxios;
