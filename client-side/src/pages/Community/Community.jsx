/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Spinner from "../../shared/Spinner";

const Community = () => {
	const axios = useAxios();
	const { data: community = {}, isPending } = useQuery({
		queryKey: ["community"],
		queryFn: async () => {
			const { data } = await axios.get("https://randomuser.me/api/?results=15");
			return data;
		},
	});
	if (isPending) return <Spinner />;
	const communityMember = community.results;

	console.log(communityMember);
	return (
		<div className="bg-neutral-900 text-gray-100">
			<div className="">
				<div className="mx-auto p-6 sm:px-6 lg:px-8">
					<div className="relative isolate overflow-hidden px-6 py-8 text-center sm:rounded-3xl sm:px-16">
						<h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">
							Join our community now
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
							Experience the benefits of our community. No obligations, just
							join and explore.
						</p>
						<div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
							<img
								className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
								src="https://randomuser.me/api/portraits/men/34.jpg"
								alt=""
							/>
							<img
								className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
								src="https://randomuser.me/api/portraits/men/22.jpg"
								alt=""
							/>
							<img
								className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
								src="https://randomuser.me/api/portraits/men/3.jpg"
								alt=""
							/>
							<img
								className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
								src="https://randomuser.me/api/portraits/men/4.jpg"
								alt=""
							/>
							<span className="!ml-2 font-bold italic text-teal-500">
								Join these awesome members
							</span>
						</div>
						<div className="mt-12 flex items-center justify-center gap-x-6">
							<button
								type="button"
								className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-teal-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
							>
								<span className="absolute -top-5 left-0 w-full text-left text-xs italic text-teal-600">
									No Obligations
								</span>
								Join Now
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="-mr-0.5 h-5 w-5"
								>
									<path
										fill-rule="evenodd"
										d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
						</div>
						<svg
							viewBox="0 0 1024 1024"
							className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
							aria-hidden="true"
						>
							<circle
								cx="512"
								cy="512"
								r="512"
								fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
								fill-opacity="0.7"
							></circle>
							<defs>
								<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
									<stop stop-color="#15b8a6"></stop>
									<stop offset="1" stop-color="#15b8a6"></stop>
								</radialGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
			<section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5" >
				{communityMember.map((member) => (
					<div
						key={member.cell}
						className="py-8 px-8 max-w-lg mx-auto hover:shadow-slate-200 bg-neutral-800 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
					>
						<img
							className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
							src={member.picture.medium}
							alt="user img"
						/>
						<div className="text-center space-y-2 sm:text-left">
							<div className="space-y-0.5">
								<p className="text-lg font-semibold">
									<span>{member.name.first}</span>
									<span className="ml-3">{member.name.last}</span>
								</p>
								<p className="font-medium">{member.email}</p>
							</div>
							<button className="px-4 py-1 mx-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
								Follow
							</button>
							<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
								Message
							</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Community;
