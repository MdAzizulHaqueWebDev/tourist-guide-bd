/**
 * @format
 * @htmlFormat
 */
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaBed, FaClock, FaPersonWalking } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Reviews from "./Reviews";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import TourGuides from "../TabSection/TourGuides";
import Spinner from "../../../shared/Spinner";
import useAxiosSecureInstance from "../../../hooks/useAxiosSecureInstance";
import Swal from "sweetalert2";
const TourDetails = () => {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	const axiosPublic = useAxios();
	const { id } = useParams();
	const { data: tourData = [], isPending } = useQuery({
		queryKey: ["tourDetailsData"],
		queryFn: async () => {
			const { data } = await axiosPublic.get(`/tour-details/${id}`);
			return data;
		},
	});
	const { data: guide = [], isPending: guideLoading } = useQuery({
		queryKey: ["guide"],
		queryFn: async () => {
			const { data } = await axiosPublic.get(`/guide-profile`);
			return data;
		},
	});
	const [startDate, setStartDate] = useState(new Date());
	const axiosSecure = useAxiosSecureInstance();

	const {
		_id,
		title,
		tourImg,
		scenery,
		// tourType,
		description,
		duration,
		// dates,
		price,
		about,
		highlights,
		itinerary,
		included,
		excluded,
		reviews,
	} = tourData || {};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const displayName = user.displayName;
		const email = user.email;
		const photoURL = user.photoURL;
		const price = form.price.value;
		const date = startDate;
		const guideEmail = form.select.value;
		const status = "review";
		const bookingInfo = {
			packageId: _id,
			title,
			displayName,
			email,
			photoURL,
			price,
			date,
			guideEmail,
			status,
		};
		Swal.fire({
			title: "Are you sure Confirm booking?",
			icon: "warning",
			showDenyButton: true,
			denyButtonText: "My Bookings",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			denyButtonColor: "#add",
			confirmButtonText: "Yes, Book it!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				const { data } = await axiosSecure.post("/bookings", bookingInfo);
				console.log(data, "data");
				if (data.insertedId) {
					Swal.fire({
						title: "Booked!",
						icon: "success",
					});
				}
			} else if (result.isDenied) {
				navigate("/dashboard/my-booking");
			}
		});
	};

	if (isPending || loading || guideLoading) return <Spinner />;
	return (
		<>
			<div className="bg-gray-100 ">
				<section className="py-6 px-2 container mx-auto gap-4 flex flex-col-reverse  md:flex-row  text-gray-900">
					<div className=" md:w-2/3 grid grid-cols-2 gap-4 md:grid-cols-2 mx-auto">
						{scenery?.map((scene, indx) => (
							<div key={indx} className="relative">
								<Zoom>
									<img
										src={scene?.img}
										alt=""
										// width="500"
										className="w-full h-full rounded shadow-sm max-h-52 bg-gray-500 aspect-square"
									/>
								</Zoom>
								<p className="absolute bottom-2 right-4 text-gray-50 font-bold md:text-2xl p-2 shadow-xl font-poppins uppercase">
									{scene?.placeName}
								</p>
							</div>
						))}
					</div>
					<div className="flex-1">
						<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-full max-w-sm mx-auto ">
							<Zoom>
								<img
									src={tourImg}
									alt="img not found"
									className="inset-0 h-full w-full object-cover aspect-square"
								/>
							</Zoom>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
							<h3 className="z-10 p-3 m-4 md:text-xl font-bold text-white">
								{title.length > 25 ? title.slice(0, 30) : title}
							</h3>
						</article>
					</div>
				</section>
			</div>
			<section className="max-w-5xl mx-auto p-6 space-y-6">
				{/* details section */}
				<>
					<section className="my-4 space-y-2">
						<h1 className="text-2xl md:text-5xl font-sans -ml-1 font-medium">
							{title}
						</h1>
						<p className="md:w-3/4">{description}</p>
						<div className="mt-2 flex flex-wrap justify-start items-center gap-4">
							<a className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
								<div className="mt-2 text-sm text-gray-400">Duration</div>
								<div className="flex flex-row items-center justify-center">
									<FaClock />
									<span className="font-bold text-gray-600">{duration}</span>
								</div>
							</a>
							<a className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
								<div className="mt-2 text-sm text-gray-400">Price</div>
								<div className="flex flex-row items-center gap-2 justify-center">
									<FaClock />
									<p>
										<span className="text-[#EA738D]">$us{price}</span>
									</p>
								</div>
							</a>
							<a className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
								<div className="mt-2 text-sm text-gray-400">
									Physical Rating
								</div>
								<div className="flex flex-row items-center justify-center">
									<FaPersonWalking />
									<span className="font-bold text-gray-600">Easy</span>
								</div>
							</a>
						</div>
						<div>
							<h1 className="text-xl font-bold my-2 font-poppins">
								About Trip
							</h1>
							<p className="md:w-3/4">{about}</p>
						</div>
					</section>
					<>
						{/* TRIP HIGHLIGHTS */}
						<p className="text-xl font-bold font-poppins">TRIP HIGHLIGHTS</p>
						<ul className="space-y-3 text-lg my-2 ">
							{highlights?.map((highlight, indx) => (
								<li key={indx} className="flex space-x-3">
									<svg
										className="flex-shrink-0 h-6 w-6 text-blue-600"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
											fill="currentColor"
										/>
									</svg>
									<span className="text-gray-800 dark:text-gray-400">
										{highlight}
									</span>
								</li>
							))}
						</ul>
					</>
					<>
						{/* TRIP ITINERARY */}
						<p className="text-xl font-bold font-poppins mb-2">
							TRIP ITINERARY
						</p>
						<div className="bg-white">
							<div className="flex flex-col justify-between">
								<ul>
									{itinerary?.map((singleItinerary, indx) => (
										<li key={indx} className="text-left mb-2">
											<div className="flex flex-row items-start">
												<div className="flex flex-col items-center justify-center mr-3">
													<div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-400 text-white border-4 border-white font-semibold">
														Day {indx + 1}
													</div>
												</div>
												<div className="p-2">
													<ul className="max-w-5xl mx-auto divide-y  shadow shadow-blue-600 rounded-xl">
														<li className="w-[50vw]">
															<details className="group">
																<summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
																	<svg
																		className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
																		xmlns="http://www.w3.org/2000/svg"
																		width="16"
																		height="16"
																		fill="currentColor"
																		viewBox="0 0 16 16"
																	>
																		<path
																			fillRule="evenodd"
																			d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
																		></path>
																	</svg>
																	<span>{singleItinerary.title}</span>
																</summary>

																<article className="px-4 pb-4">
																	<span className="font-bold">Activites</span>
																	{singleItinerary?.activities?.map(
																		(activity, indx) => (
																			<li
																				key={indx}
																				className="border-b pl-4 py-2 dark:border-gray-600"
																			>
																				{activity}
																			</li>
																		),
																	)}
																	<div className="flex items-center gap-2 mt-2">
																		<FaBed className="text-xl" />
																		<div>
																			<p className="font-semibold">
																				Accommodation
																			</p>
																			<small>
																				{singleItinerary?.accommodation}
																			</small>
																		</div>
																	</div>
																	<div className="flex items-center gap-2 mt-2">
																		<FaBed className="text-xl" />
																		<div>
																			<p className="font-semibold">
																				Activities Includes
																			</p>
																			<small>
																				{singleItinerary?.included?.map(
																					(item, indx) => (
																						<li key={indx}>{item}</li>
																					),
																				)}
																			</small>
																		</div>
																	</div>
																</article>
															</details>
														</li>
													</ul>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</>
					<div className="flex flex-col md:flex-row justify-start">
						{/* What's Includes */}
						<section>
							<p className="text-xl font-bold font-poppins mb-2">
								Whats Includes
							</p>
							<ul className="space-y-3 font-medium">
								{included?.map((include, indx) => (
									<li key={indx} className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<svg
												className="w-5 h-5 text-blue-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
										<p className="ml-3 leading-5 text-gray-600">{include}</p>
									</li>
								))}
							</ul>
						</section>
						{/* What's not Includes */}
						<section className="md:ml-10">
							<p className="text-xl font-bold font-poppins mb-2">
								Whats not Includes
							</p>
							<ul className="space-y-3 font-medium">
								{excluded?.map((exclude, indx) => (
									<li key={indx} className="flex items-start lg:col-span-1">
										<div className="flex-shrink-0">
											<RxCross2 className="text-red-300" />
										</div>
										<p className="ml-3 leading-5 text-gray-600">{exclude}</p>
									</li>
								))}
							</ul>
						</section>
					</div>
					<>
						<Reviews reviews={reviews} />
					</>
					<TourGuides />
				</>
				{/* booking  form */}
				<>
					<div className="bg-white py-8 px-4 shadow">
						<form onSubmit={handleSubmit}>
							<>
								<label
									htmlFor="name"
									className="block text-sm font-medium leading-5  text-gray-700"
								>
									Name
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="name"
										name="name"
										type="text"
										readOnly
										defaultValue={user?.displayName}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</>
							<>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-5  text-gray-700"
								>
									Email
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="email"
										name="email"
										readOnly
										type="email"
										defaultValue={user?.email}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</>
							<div className="flex justify-center">
								<div className="mt-1 relative rounded-md shadow-sm">
									<img
										src={user?.photoURL}
										alt=""
										className="rounded max-h-40 h-20 w-20"
									/>
									<p>Your Image</p>
								</div>
								<input
									id="photoURL"
									name="photoURL"
									readOnly
									type="text"
									defaultValue={user?.photoURL}
									className="hidden"
								/>
							</div>
							<>
								<label
									htmlFor="price"
									className="block text-sm font-medium leading-5  text-gray-700"
								>
									price
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="price"
										name="price"
										readOnly
										type="text"
										defaultValue={price}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</>

							<div className="my-6">
								<label
									htmlFor="password_confirmation"
									className="block text-sm font-medium leading-5 text-gray-700"
								>
									Date Range
								</label>
								<div className="mt-1 rounded-md w-full shadow-sm">
									{/* Calender */}
									<DatePicker
										selected={startDate}
										onChange={(date) => setStartDate(date)}
									/>
								</div>
							</div>
							<>
								<label
									htmlFor="select"
									className="block text-sm font-medium leading-5  text-gray-700"
								>
									Guider Name
								</label>
								<select
									name="select"
									className="select select-bordered w-full mt-2"
								>
									<option selected aria-readonly disabled>
										Who guided you?
									</option>
									{guide?.map((item) => (
										<option
											className="text-black"
											key={item._id}
											value={item?.email}
										>
											{item?.displayName}
										</option>
									))}
								</select>
							</>

							<div className="mt-6">
								<span className="block w-full rounded-md shadow-sm">
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
									>
										Book Now
									</button>
								</span>
							</div>
						</form>
					</div>
				</>
			</section>
		</>
	);
};

export default TourDetails;
