/** @format */

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../shared/Spinner";
import useAxiosSecureInstance from "../../hooks/useAxiosSecureInstance";
import toast from "react-hot-toast";
import Empty from "../../assets/no-have-any-product.jpg";
const TourAssigned = () => {
	const { user, loading } = useAuth();
	const axiosSecure = useAxiosSecureInstance();
	const {
		data: assignedTour,
		isPending,
		refetch,
	} = useQuery({
		queryKey: ["assigned-tour"],
		enabled: !!user,
		queryFn: async () => {
			if (!user) return [];

			const { data } = await axiosSecure.get(`/assigned-tour/${user?.email}`);
			return data;
		},
	});
	if (loading || isPending) return <Spinner />;
	// console.log(assignedTour);

	const handleRejectBtn = async (id) => {
		const { data } = await axiosSecure.patch(`/bookings/rejected/${id}`, {
			status: "rejected",
		});
		if (data.modifiedCount) {
			refetch();
			toast.success("Rejected Success");
		} else {
			toast.error("Already Rejected");
		}
	};

	const handleAcceptedBtn = async (id) => {
		const { data } = await axiosSecure.patch(`/bookings/accepted/${id}`, {
			status: "accepted",
		});
		if (data.modifiedCount) {
			refetch();
			toast.success("Accepted Success");
		} else {
			toast.error("Already Accepted");
		}
	};

	return (
		<>
			<SectionTitle heading={"All Assigned Tour List"} />
			{assignedTour.length ? (
				<table className="w-full mx-auto px-10 divide-y divide-gray-200 overflow-x-auto rounded">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Name
							</th>
							<th
								scope="col"
								className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Packages
							</th>
							<th
								scope="col"
								className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Tour Date
							</th>
							<th
								scope="col"
								className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Price
							</th>
							<th
								scope="col"
								className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Status
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{assignedTour?.map((tour) => (
							<tr key={tour._id}>
								<td className="px-1 py-4 whitespace-nowrap">{tour?.title}</td>
								<td className="px-1 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900">
										{tour?.displayName}
									</div>
								</td>
								<td className="px-1 py-4 whitespace-nowrap">
									<span className="px-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
										{tour?.date}
									</span>
								</td>
								<td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
									{tour?.price}
								</td>
								<td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
									<button
										disabled={tour.status === "rejected"}
										onClick={() => handleRejectBtn(tour._id)}
										className="btn btn-sm mx-1 bg-red-300"
									>
										Rejected
									</button>
									<button
										disabled={tour.status === "accepted"}
										onClick={() => handleAcceptedBtn(tour._id)}
										className="btn btn-sm bg-blue-300"
									>
										Accepted
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="mx-2 p-3 rounded">
					<img src={Empty} alt="" />
				</div>
			)}
		</>
	);
};

export default TourAssigned;
