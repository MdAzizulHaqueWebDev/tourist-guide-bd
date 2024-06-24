/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../shared/Spinner";

const Blogs = () => {
	const { data: blogs, isPending } = useQuery({
		queryKey: ["blogs"],
		queryFn: async () => {
			const { data } = await axios.get("/blogs.json");
			return data;
		},
	});
	if (isPending) return <Spinner />;
	return (
		<div>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<div className="flex items-center justify-between">
						<h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
							recent posts{" "}
						</h1>

						<button className="focus:outline-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>

					<hr className="my-8 border-gray-200 dark:border-gray-700" />

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
						{blogs?.map((blog, inx) => (
							<div key={inx}>
								<img
									className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
									src={blog.image}
									alt=""
								/>

								<div className="mt-8">
									<span className="text-blue-500 uppercase">
										{blog.category}{" "}
									</span>

									<h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
										{blog.tourTitle}
									</h1>

									<p className="mt-2 text-gray-500 dark:text-gray-400">
										{blog.description}
									</p>

									<div className="flex items-center justify-between mt-4">
										<div>
											<a
												href="#"
												className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
											>
												{blog.authorName}
											</a>

											<p className="text-sm text-gray-500 dark:text-gray-400">
												{blog.date}
											</p>
										</div>

										<a className="inline-block text-blue-500 underline hover:text-blue-400">
											Read more
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blogs;
