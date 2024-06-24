/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Spinner from "../../../shared/Spinner";
import PackageCard from "./PackageCard";
import { Link, ScrollRestoration } from "react-router-dom";

const OurPackage = () => {
	const axios = useAxios();
	const { data: tourPackages = [], isPending } = useQuery({
		queryKey: ["all-tour-packages"],
		queryFn: async () => {
			const { data } = await axios.get(`/tour-packages`);
			return data;
		},
	});
	return (
		<>
			<ScrollRestoration />
			<div className=" my-4 max-w-5xl gap-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{isPending ? (
					<Spinner />
				) : (
					tourPackages?.map((tour) => (
						<PackageCard key={tour._id} tour={tour} />
					))
				)}
			</div>
			<div className="text-center mt-8">
				<Link to={"/all-packages"}>
					<button className="bg-blue-400 hover:bg-blue-500 text-gray-200 font-bold py-2 px-4 rounded">
						View All Package
					</button>
				</Link>
			</div>
		</>
	);
};

export default OurPackage;
