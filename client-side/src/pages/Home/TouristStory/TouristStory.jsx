/** @format */

import { Link, ScrollRestoration } from "react-router-dom";
import useAllStory from "../../../hooks/useAllStory";
import SectionTitle from "../../../shared/SectionTitle";
import Spinner from "../../../shared/Spinner";
const TouristStory = () => {
	const { stories, isPending } = useAllStory();
	if (isPending) return <Spinner />;
	return (
		<>
			<ScrollRestoration />
			<SectionTitle heading={"Our Tourist Tour Story"} />
			<section className="grid container md:p-5 mx-auto gap-3 grid-cols-1 md:grid-cols-2">
				{stories?.map((story) => (
					<Link key={story._id} to={`/story-details/${story._id}`}>
						<div className="max-w-2xl overflow-hidden p-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
							<img className="object-cover w-full h-64" src={story.image} />

							<div className="p-6">
								<div className="gap-2">
									<span className="font-bold">Tour Title: </span>{" "}
									{story?.tourTitle}
									<a
										className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
										tabIndex={0}
										role="link"
									>
										{story?.description.length > 30
											? story?.description.slice(0, 25)
											: story?.description}
									</a>
									<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										{story?.story}
									</p>
								</div>

								<div className="mt-4">
									<div className="flex items-center">
										<div className="flex items-center">
											<img
												className="object-cover h-10 rounded-full"
												src={story?.writerImage}
												alt="Avatar"
											/>
										</div>
										<div className="flex flex-col space-y-1">
											<p
												href="#"
												className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
												tabIndex="0"
												role="link"
											>
												{story?.writer}
											</p>
											<span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
												{story?.writtenDate}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</section>
		</>
	);
};

export default TouristStory;
