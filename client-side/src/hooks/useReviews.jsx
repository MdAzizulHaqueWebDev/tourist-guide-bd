/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useReviews = () => {
	const axios = useAxios();
	const { data: reviews = [], isPending } = useQuery({
		queryKey: ["reviews"],
		queryFn: async () => {
			const { data } = await axios.get("/reviews");
			return data;
		},
	});
	return { reviews, isPending };
};

export default useReviews;
