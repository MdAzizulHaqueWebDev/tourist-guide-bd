/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllStory = () => {
	const axios = useAxios();
	const {
		data: stories = [],
		refetch,
		isPending,
	} = useQuery({
		queryKey: ["allStory", "story"],
		queryFn: async () => {
			const { data } = await axios.get(`/story`);
			return data;
		},
	});
	return { stories, refetch, isPending };
};

export default useAllStory;
