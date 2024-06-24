/** @format */

import useReviews from "../../hooks/useReviews";
import Spinner from "../../shared/Spinner";

const ClientReview = () => {
	const { isPending, reviews } = useReviews();
	if (isPending) return <Spinner />;
	return (
		<>
			<section className="bg-white  dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
						What our <span className="text-blue-500 ">clients</span> say
					</h1>

					<p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
						A fantastic adventure through the Sundarbans. The boat accommodation
						was comfortable, and the guides were very knowledgeable
					</p>

					<div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
						{reviews.slice(0, 4).map((review, indx) => (
							<div
								key={indx}
								className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8"
							>
								<p className="leading-loose text-gray-500 dark:text-gray-300">
									“{review.reviewText}”
								</p>

								<div className="flex items-center mt-6">
									<img
										className="object-cover rounded-full w-14 h-14"
										src={review.reviewerImage}
										alt="reviewerImage"
									/>

									<div className="mx-4">
										<h1 className="font-semibold text-blue-500">
											{review.reviewer}
										</h1>
										<span className="text-sm text-gray-500 dark:text-gray-300">
											{review.date}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ClientReview;
