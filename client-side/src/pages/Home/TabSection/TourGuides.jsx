/** @format */

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Spinner from "../../../shared/Spinner";

const TourGuides = () => {
	const axios = useAxios();
	const { data: guideProfiles, isPending } = useQuery({
		queryKey: ["guide-profiles"],
		queryFn: async () => {
			const { data } = await axios.get("/guide-profile");
			return data;
		},
	});
	if (isPending) return <Spinner />;
	return (
		<section className="bg-white dark:bg-gray-900 mt-2">
			<div className="container px-6 py-8 mx-auto shadow hover:shadow-blue-300">
				<h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
					Our Guide Team
				</h2>

				<div className="grid gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{guideProfiles?.map((profile) => (
						<div
							key={profile._id}
							className="w-full max-w-xs text-center border shadow hover:shadow-blue-400 p-5 rounded"
						>
							<img
								className="object-cover object-center w-full h-48 mx-auto rounded-lg"
								src={profile?.photoURL}
								alt="avatar"
							/>

							<div className="mt-2">
								<h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
									{profile?.displayName}
								</h3>
								<div className="flex gap-2 justify-center my-2">
									<a>
									<FaFacebook />
									</a>
									<FaInstagram />
									<FaLinkedin />
								</div>
								<Link to={`/profile/${profile._id}`}>
									<span className="mt-1 hover:underline font-medium text-gray-600 dark:text-gray-300">
										View Details
									</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TourGuides;
