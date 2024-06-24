/** @format */

import ReactStars from "react-rating-stars-component";
import SectionTitle from "../../../shared/SectionTitle";
const Reviews = ({ reviews }) => {
	return (
		<>
		<SectionTitle heading="Our Customer Review" />

			<div className="flex flex-col justify-between md:flex-row overflow-x-auto gap-3 md:mt-5">
				{reviews?.map((review, indx) => (
					<div
						key={indx}
						className="flex bg-blue-200 text-black flex-col justify-between rounded-md border border-neutral-800 p-2 shadow-sm max-w-sm "
					>
						<div>
							<ReactStars
								size={30}
								value={review.rating}
								edit={false}
								count={5}
								activeColor="#ffd700"
							/>
						</div>

						<p className=" text-base font-normal leading-relaxed tracking-wide ">
							{review.reviewText.slice(0,100)}
						</p>

						<div className="mt-4 flex items-center gap-6 ">
							<div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
								<div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
									<img
										alt="img not found"
										src={review.reviewerImage}
										width="50"
										height="50"
										decoding="async"
										data-nimg="1"
										className="inline-block "
										loading="lazy"
									/>
								</div>
							</div>
							<div>
								<p className="leading-relaxed tracking-wide ">
									{review.reviewer}
								</p>
								<p className="text-xs leading-relaxed tracking-wide ">
									{review.date}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Reviews;
