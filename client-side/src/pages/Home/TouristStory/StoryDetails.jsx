/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { ScrollRestoration, useParams } from "react-router-dom";
import Spinner from "../../../shared/Spinner";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa6";
import OurPackage from "../TabSection/OurPackage";
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterShareButton,
	XIcon,
} from "react-share";
import SectionTitle from "../../../shared/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
const StoryDetails = () => {
	const axios = useAxios();
	const { user } = useAuth();
	const { id } = useParams();
	const { data: storyDetails = {}, isPending } = useQuery({
		queryKey: ["story-details"],
		queryFn: async () => {
			const { data } = await axios.get(`/story-details/${id}`);
			return data;
		},
	});
	if (isPending) return <Spinner />;
	const {
		description,
		favoritePart,
		guideFeedback,
		facebookLink,
		instagramLink,
		discordLinks,
		image,
		// rating,
		story,
		tourDate,
		tourTitle,
		writer,
		writerImage,
		writtenDate,
		// _id,
	} = storyDetails;
	const shareUrl = window.location.href;
	return (
		<>
			<ScrollRestoration />
			<div className="max-w-6xl mx-auto mb-8 py-10 px-2 md:px-7 bg-gray-100 text-gray-900">
				<div>
					<Zoom>
						<img className="max-h-96 w-full" src={image} alt="" />
					</Zoom>
				</div>
				<section className="border-b-2 p-8 flex md:flex-nowrap flex-wrap justify-center md:justify-between items-center">
					<div>
						<h1 className="responsive-text font-poppins font-medium">
							{tourTitle}
						</h1>
						<p>date: {tourDate}</p>
					</div>
					<section>
						<div className=" border-4shadow-[5px_5px_0_0_rgba(0,0,0,1)] max-w-5xl mx-5 p-3 flex flex-col items-center justify-center text-center">
							<p className="text-indigo-900  font-bold border-b-4 border-b-indigo-300">
								Share this story
							</p>

							<ul className="flex flex-row items-center justify-center text-center gap-3 text-xl mt-1">
								<li>
									{user ? (
										<FacebookShareButton url={shareUrl}>
											<FacebookIcon size={32} round />
										</FacebookShareButton>
									) : (
										<FacebookIcon
											onClick={() => toast.error("Pls login ago")}
											size={32}
											round
										/>
									)}
								</li>
								<li>
									{user ? (
										<TwitterShareButton url={shareUrl} title={"Twitter"}>
											<XIcon size={32} round />
										</TwitterShareButton>
									) : (
										<XIcon
											onClick={() => toast.error("Pls login ago")}
											size={32}
											round
										/>
									)}
								</li>
							</ul>
						</div>
					</section>
					<div className="rating p-4 border-4 gap-1 shadow-md">
						Rating
						<input
							type="radio"
							name="rating-2"
							className="mask mask-star-2 bg-orange-400"
						/>
						<input
							type="radio"
							name="rating-2"
							className="mask mask-star-2 bg-orange-400"
							checked
						/>
						<input
							type="radio"
							name="rating-2"
							className="mask mask-star-2 bg-orange-400"
						/>
						<input
							type="radio"
							name="rating-2"
							className="mask mask-star-2 bg-orange-400"
						/>
						<input
							type="radio"
							name="rating-2"
							className="mask mask-star-2 bg-orange-400"
						/>
					</div>
				</section>
				<section className="space-y-2 p-2">
					<div>
						<p className="font-bold font-rubik responsive-text">Description</p>
						{description}
					</div>
					<div>
						<p className="font-bold font-rubik responsive-text">Story</p>
						{story}
					</div>
					<div>
						<p className="font-bold font-rubik responsive-text">
							Favorite part
						</p>
						I hope that through this blog and its stories and resources, it will
						be﻿﻿ ﻿﻿﻿YOUR ﻿﻿turn ﻿﻿to travel﻿
						{favoritePart}
					</div>
					<div>
						<p className="font-bold font-rubik responsive-text">
							Guider Feedback
						</p>
						{guideFeedback}
					</div>
				</section>
				<div className="pt-6 border-t border-gray-300">
					<div className="flex items-center gap-3">
						<div>
							<img
								src={writerImage}
								alt=""
								className="self-center flex-shrink-0 md:w-24 w-14 h-14 md:h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300"
							/>
						</div>
						<div>
							<h4 className="text-lg font-semibold">Name: {writer}</h4>
							<p className="text-gray-600">Written :{writtenDate}</p>
							<div className="flex justify-start">
								<a
									href={facebookLink}
									aria-label="GitHub"
									className="p-2 rounded-md text-gray-800 hover:text-teal-600"
								>
									<FaFacebook />
								</a>
								<a
									rel="noopener noreferrer"
									href={instagramLink}
									aria-label="Dribble"
									className="p-2 rounded-md text-gray-800 hover:text-teal-600"
								>
									<FaInstagram />
								</a>
								<a
									rel="noopener noreferrer"
									href={discordLinks || ""}
									aria-label="Twitter"
									className="p-2 rounded-md text-gray-800 hover:text-teal-600"
								>
									<FaDiscord />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<SectionTitle
					heading="let's discuss"
					subheading="I hope that through this story and resources, it will
						be YOUR turn to travel"
				/>
				<OurPackage />
			</div>
		</>
	);
};

export default StoryDetails;
