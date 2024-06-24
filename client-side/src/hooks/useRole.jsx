/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
const useRole = () => {
	const { user, loading } = useAuth();
	const axios = useAxios();
	const { data: role, isPending: roleLoading } = useQuery({
		queryKey: ["role", user?.email],
		queryFn: async () => {
			if (loading || !user?.email) return [];
			const { data } = await axios.get(`/user-role/${user.email}`);
			return data.role;
		},
		enabled: !!user?.email,
	});
	return { role, roleLoading };
};
export default useRole;
