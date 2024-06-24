/** @format */

import useAuth from "../../hooks/useAuth";
import useAxiosSecureInstance from "../../hooks/useAxiosSecureInstance";
import SectionTitle from "../../shared/SectionTitle";
import Spinner from "../../shared/Spinner";
import { uploadImage } from "../../utils/api/uploadImage";

const AddPackage = () => {
	const { loading } = useAuth();
	const axiosSecure = useAxiosSecureInstance();
	if (loading) return <Spinner />;
	const handleAddPackageForm = async (event) => {
		event.preventDefault();
		const form = event.target;
		// all img related code
		const img1 = form.tourGalleryImg1.files[0];
		const img2 = form.tourGalleryImg2.files[0];
		const img3 = form.tourGalleryImg3.files[0];
		const img4 = form.tourGalleryImg4.files[0];
		const tourCard = form.tourCardImg.files[0];
		const { data: data1 } = await uploadImage(img1);
		const { data: data2 } = await uploadImage(img2);
		const { data: data3 } = await uploadImage(img3);
		const { data: data4 } = await uploadImage(img4);
		const { data: data5 } = await uploadImage(tourCard);
		const imgURL1 = data1.display_url;
		const imgURL2 = data2.display_url;
		const imgURL3 = data3.display_url;
		const imgURL4 = data4.display_url;
		const placeName1 = form.placeName1.value;
		const placeName2 = form.placeName2.value;
		const placeName3 = form.placeName3.value;
		const placeName4 = form.placeName4.value;
		const scenery1 = {
			img: imgURL1,
			placeName: placeName1,
		};
		const scenery2 = {
			img: imgURL2,
			placeName: placeName2,
		};
		const scenery3 = {
			img: imgURL3,
			placeName: placeName3,
		};
		const scenery4 = {
			img: imgURL4,
			placeName: placeName4,
		};
		const tourCardImg = data5.display_url;

		// other information related code
		const tourTitle = form.tourTitle.value;
		const shortDescription = form.shortDescription.value;
		const tourType = form.tourType.value;
		const duration = form.duration.value;
		const price = form.price.value;
		const highlight1 = form.highlight1.value;
		const highlight2 = form.highlight2.value;
		const highlight3 = form.highlight3.value;

		const day1ActivityTitle = form.day1ActivityTitle.value;
		const day1Activities = form.day1Activities.value;
		const day2ActivityTitle = form.day2ActivityTitle.value;
		const day2Activities = form.day2Activities.value;
		const day3ActivityTitle = form.day3ActivityTitle.value;
		const day3Activities = form.day3Activities.value;
		const accommodation = form.accommodation.value;
		const included1 = form.included1.value;
		const included2 = form.included2.value;
		const included3 = form.included3.value;
		const excluded1 = form.excluded1.value;
		const excluded2 = form.excluded2.value;
		const excluded3 = form.excluded3.value;
		const about = form.about.value;

		const tourPackageData = {
			title: tourTitle,
			tourImg: tourCardImg,
			scenery: [scenery1, scenery2, scenery3, scenery4],
			tourType,
			shortDescription,
			duration,
			price,
			about,
			highlights: [highlight1, highlight2, highlight3],
			itinerary: [
				{
					day: 1,
					title: day1ActivityTitle,
					activities: [day1Activities],
					accommodation,
					included: [included1],
				},
				{
					day: 2,
					title: day2ActivityTitle,
					activities: [day2Activities],
					accommodation,
					included: [included2],
				},
				{
					day: 3,
					title: day3ActivityTitle,
					activities: [day3Activities],
					accommodation,
					included: [included3],
				},
			],
			included: [included1, included2, included3],
			excluded: [excluded1, excluded2, excluded3],
		};
		const { data } = await axiosSecure.post("/add-package", tourPackageData);
		console.log(data);
	};
	return (
		<>
			<SectionTitle heading={"Add a New Package"} />
			<>
				<div className="bg-white w-full  border-4 rounded-lg shadow relative mt-2 px-3">
					<div className="flex items-start justify-between p-5 border-b rounded-t">
						<h3 className="text-xl font-semibold">Give here product details</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="product-modal"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>

					<div className="p-6 space-y-6">
						<form onSubmit={handleAddPackageForm} action="#">
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="tourTitle"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Title
									</label>
									<input
										type="text"
										name="tourTitle"
										id="tourTitle"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="type"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Type
									</label>
									<select
										id="type"
										name="tourType"
										className="select select-info w-full max-w-xs"
									>
										<option disabled selected>
											Tour Type
										</option>
										<option>historical</option>
										<option>adventure</option>
										<option>nature</option>
										<option>family</option>
									</select>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="duration"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Duration
									</label>
									<input
										type="text"
										name="duration"
										id="duration"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="price"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Price
									</label>
									<input
										type="text"
										name="price"
										id="price"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>

								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="highlight1"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Hignlight Part 1
									</label>
									<input
										type="text"
										name="highlight1"
										id="highlight1"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="highlight2"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Hignlight Part
									</label>
									<input
										type="text"
										name="highlight2"
										id="highlight2"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="highlight3"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Hignlight Part 3
									</label>
									<input
										type="text"
										name="highlight3"
										id="highlight3"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="day1ActivityTitle"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Day 1 Activity Heading
									</label>
									<input
										type="text"
										name="day1ActivityTitle"
										id="day1ActivityTitle"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="day1Activities"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Day 1 Activitities
									</label>
									<input
										type="text"
										name="day1Activities"
										id="day1Activities"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="day2ActivityTitle"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Day 2 Activity Heading
									</label>
									<input
										type="text"
										name="day2ActivityTitle"
										id="day2ActivityTitle"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="day2Activities"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Day 2 Activitities
									</label>
									<input
										type="text"
										name="day2Activities"
										id="day2Activities"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="day3ActivityTitle"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Day 3 Activity Heading
									</label>
									<input
										type="text"
										name="day3ActivityTitle"
										id="day3ActivityTitle"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="day3Activities"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Day 3 Activitities
									</label>
									<input
										type="text"
										name="day3Activities"
										id="day3Activities"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>

								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="accommodation"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour accommodation
									</label>
									<input
										type="text"
										name="accommodation"
										id="accommodation"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>

								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="included1"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Included
									</label>
									<input
										type="text"
										name="included1"
										id="included1"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="included2"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										included
									</label>
									<input
										type="text"
										name="included2"
										id="included2"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="included3"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Included
									</label>
									<input
										type="text"
										name="included3"
										id="included3"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="excluded1"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Excluded
									</label>
									<input
										type="text"
										name="excluded1"
										id="excluded1"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="excluded2"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Excluded
									</label>
									<input
										type="text"
										name="excluded2"
										id="excluded2"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="excluded3"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Excluded
									</label>
									<input
										type="text"
										name="excluded3"
										id="excluded3"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="tour title”"
										required=""
									/>
								</div>

								<div className="col-span-6">
									<label
										htmlFor="tourCardImg"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Card Image
									</label>
									<input
										type="file"
										id="tourCardImg"
										name="tourCardImg"
										className="file-input  file-input-bordered file-input-info w-full "
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="tourGalleryImg1"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Gallery scenery 1
									</label>
									<input
										type="file"
										id="tourGalleryImg1"
										name="tourGalleryImg1"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="placeName1"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Place Name 1
									</label>
									<input
										type="text"
										id="placeName1"
										name="placeName1"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="tourGalleryImg2"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Gallery scenery 2
									</label>
									<input
										type="file"
										id="tourGalleryImg2"
										name="tourGalleryImg2"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="placeName2"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Place Name 2
									</label>
									<input
										type="text"
										id="placeName2"
										name="placeName2"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="tourGalleryImg3"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Gallery scenery 3
									</label>
									<input
										type="file"
										id="tourGalleryImg3"
										name="tourGalleryImg3"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="placeName3"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Place Name 3
									</label>
									<input
										type="text"
										id="placeName3"
										name="placeName3"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="tourGalleryImg4"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour Gallery scenery 4
									</label>
									<input
										type="file"
										id="tourGalleryImg4"
										name="tourGalleryImg4"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-6 lg:col-span-3">
									<label
										htmlFor="placeName4"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Place Name 4
									</label>
									<input
										type="text"
										id="placeName4"
										name="placeName4"
										className="file-input file-input-bordered file-input-info w-full max-w-xs"
									/>
								</div>
								<div className="col-span-full">
									<label
										htmlFor="shortDescription"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour shortDescription
									</label>
									<textarea
										id="shortDescription"
										name="shortDescription"
										rows="6"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
										placeholder="About this tour"
									></textarea>
								</div>
								<div className="col-span-full">
									<label
										htmlFor="about"
										className="text-sm font-medium text-gray-900 block mb-2"
									>
										Tour About
									</label>
									<textarea
										id="about"
										name="about"
										rows="6"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
										placeholder="About this tour"
									></textarea>
								</div>
							</div>
							<div className="p-6 border-t border-gray-200 rounded-b">
								<button
									className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									type="submit"
								>
									Save all
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		</>
	);
};

export default AddPackage;
