/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecureInstance from "./useAxiosSecureInstance";
import useAuth from "./useAuth";

const useWishlist = () => {
	const axiosSecure = useAxiosSecureInstance();
	const { user, loading } = useAuth();
	const {
		data: wishlist = [],
		refetch,
		isPending,
	} = useQuery({
		queryKey: ["wishlist", user?.email],
		queryFn: async () => {
			if (!user?.email) return [];
			const { data } = await axiosSecure.get(`/wishlist/${user?.email}`);
			return data;
		},
		enabled: !!user?.email,
	});
	return { wishlist, refetch, isPending };
};

export default useWishlist;
