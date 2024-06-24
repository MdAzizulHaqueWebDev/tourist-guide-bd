/** @format */

import { Link } from "react-router-dom";
import { categories } from "../../../../public/tourType";
import SectionTitle from "../../../shared/SectionTitle";
const TourType = () => {
	return (
		<div>
			<div className="bg-blue-50 my-8 p-4">
				<SectionTitle heading="Tour Types" subheading="Explore Your Choice" />
				<div
					aria-hidden="true"
					className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
				>
					<div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
					<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
				</div>
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden overflow-x-auto rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
						{categories?.map((tour, indx) => (
							<Link key={indx} to={`tours/${tour?.label}`}>
								<div className="group relative bg-blue-200 hover:bg-blue-100 shadow-lg transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
									<div className="relative space-y-2 flex justify-center flex-col items-center py-12 p-8">
										<img
											src={tour?.icon}
											loading="lazy"
											className="w-18 md:w-28 md:h-28 h-18 rounded-full"
											style={{ color: "transparent" }}
										/>
										<div className="space-y-2">
											<h5 className="text-xl font-semibold text-white transition group-hover:text-blue-400 uppercase">
												{tour?.label} Tours
											</h5>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourType;
