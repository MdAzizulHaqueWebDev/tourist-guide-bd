/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useStory = () => {
	const { user, loading } = useAuth();
	const axios = useAxios();
	const {
		data: story = [],
		refetch,
		isPending,
	} = useQuery({
		queryKey: ["story", user?.email],
		queryFn: async () => {
			if (!user?.email) return [];
			const { data } = await axios.get(`/story/${user?.email}`);
			return data;
		},
		enabled: !!user?.email,
	});
	return { story, refetch, isPending };
};

export default useStory;
