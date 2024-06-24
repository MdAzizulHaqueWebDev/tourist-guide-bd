/** @format */

import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import Spinner from "../../shared/Spinner";
import { uploadImage } from "../../utils/api/uploadImage";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useRole from "../../hooks/useRole";
import AddGuideProfile from "../TourGuideProfile/AddGuideProfile";
import { Navigate, ScrollRestoration } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle";
const MyProfile = () => {
	const { user, loading } = useAuth();
	const axios = useAxios();
	const { role, roleLoading } = useRole();
	if (loading || roleLoading) return <Spinner />;
	const handleTourStory = async (event) => {
		event.preventDefault();
		const form = event.target;
		const tourTitle = form["tour-title"].value;
		const tourDate = form.tourDate.value;
		const description = form.description.value;
		const favoritePart = form.favoritePart.value;
		const story = form.story.value;
		const guideFeedback = form.guideFeedback.value;
		const rating = form.rating.value;
		const image = form.image.files[0];
		const { data } = await uploadImage(image);
		const imgURL = await data?.image?.url;
		const storyData = {
			writer: user?.displayName,
			writerEmail: user?.email,
			writerImage: user?.photoURL,
			writtenDate: format(new Date(), "MMMM do, yyyy, h:mm:ss a"),
			tourTitle,
			tourDate,
			guideFeedback,
			favoritePart,
			description,
			story,
			rating,
			image: imgURL,
		};
		const { data: result } = await axios.post("/story", storyData);
		if (result.insertedId) {
			form.reset();
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Story Upload Successfully",
				showConfirmButton: false,
				timer: 1000,
			});
			return <Navigate to={"/dashboard/my-story"} />;
		}
	};
	return (
		<>
			<ScrollRestoration />
			<SectionTitle heading={"My Profile"} />
			<div className="font-sans antialiased bg-[url(https://source.unsplash.com/1L71sPT5XKc)] text-gray-900 leading-normal tracking-wider bg-cover">
				<div className="max-w-4xl flex items-center h-auto p-3 flex-wrap mx-auto lg:my-0">
					<div
						id="profile"
						className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
					>
						<div className="p-4 md:p-12 text-center lg:text-left">
							<div
								className={`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-44 w-44 bg-cover bg-center`}
								style={{
									backgroundImage: `url(${
										user?.photoURL ||
										"https://www.shutterstock.com/image-vector/no-image-icon-design-trendy-260nw-1545726860.jpg"
									})`,
								}}
							></div>

							<h1 className="text-3xl font-bold pt-8 lg:pt-0">
								{user?.displayName || "Anonymous"}
							</h1>
							<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
							<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
								<svg
									className="h-4 fill-current text-green-700 pr-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
								</svg>{" "}
								{user?.email}
							</p>
							<p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
								<svg
									className="h-4 fill-current text-green-700 pr-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
								</svg>{" "}
								Your Location
							</p>
							<p className="pt-8 text-sm">
								Totally optional short description about yourself, what you do
								and so on.
							</p>

							<div className="pt-12 pb-8">
								<button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
									Update Profile
								</button>
							</div>
						</div>
					</div>

					<div className="w-full rounded border p-2 lg:w-2/5">
						<img
							src={
								user?.photoURL ||
								"https://www.shutterstock.com/image-vector/no-image-icon-design-trendy-260nw-1545726860.jpg"
							}
							className="rounded-none w-full h-full lg:rounded-lg shadow-2xl hidden lg:block"
						/>
					</div>
				</div>
			</div>
			{user && role === "user" && (
				<div className="w-11/12 mx-auto mt-2 border-blue-100 hover:border-blue-300 flex flex-col border rounded-lg bg-white p-8">
					<h2 className="title-font mb-1 text-lg font-medium text-gray-900">
						Share a story
					</h2>
					<p className="mb-5 leading-relaxed text-gray-600">
						If you had any issues or you liked our product, please share with
						us!
					</p>
					<form onSubmit={handleTourStory}>
						<section className="mb-4 flex flex-col md:flex-row items-center gap-3">
							<div className="md:w-1/2 w-full">
								<label
									htmlFor="tour-title"
									className="text-sm leading-7 text-gray-600"
								>
									Tour-title
								</label>
								<input
									required
									type="tour-title"
									id="tour-title"
									name="tour-title"
									className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								/>
							</div>
							<div className="md:w-1/2 w-full">
								<label
									htmlFor="tour-date"
									className="text-sm leading-7 text-gray-600"
								>
									Tour-date
								</label>
								<input
									required
									type="tour-date"
									id="tour-date"
									name="tourDate"
									className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								/>
							</div>
						</section>
						<div className="mb-4">
							<label
								htmlFor="description"
								className="text-sm leading-7 text-gray-600"
							>
								Tour Description
							</label>
							<textarea
								required
								id="description"
								name="description"
								className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							></textarea>
						</div>
						<div className="mb-4">
							<label
								htmlFor="favorite-part"
								className="text-sm leading-7 text-gray-600"
							>
								Favorite-part
							</label>
							<textarea
								required
								id="favorite-part"
								name="favoritePart"
								className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							></textarea>
						</div>
						<div className="mb-4">
							<label
								htmlFor="story"
								className="text-sm leading-7 text-gray-600"
							>
								Your story
							</label>
							<textarea
								required
								id="story"
								name="story"
								className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							></textarea>
						</div>
						<div className="mb-4">
							<label
								htmlFor="guide-feedback"
								className="text-sm leading-7 text-gray-600"
							>
								Guide-feedback
							</label>
							<textarea
								required
								id="guide-feedback"
								name="guideFeedback"
								className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							></textarea>
						</div>
						<div className="mb-4">
							<label
								htmlFor="rating-tour"
								className="text-sm leading-7 text-gray-600"
							>
								Rating-tour
							</label>
							<select
								required
								id="rating-tour"
								name="rating"
								className=" w-full  rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							>
								<option disabled value="select your rating">
									{" "}
									select your rating
								</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="3.5">3.5</option>
								<option value="4">4</option>
								<option value="4.5">4.5</option>
								<option value="5">5</option>
							</select>
						</div>
						<div className="mb-4">
							<label
								htmlFor="image"
								className="text-sm leading-7 text-gray-600"
							>
								Upload-image
							</label>
							<input
								required
								type="file"
								id="image"
								name="image"
								className=" p-3 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							></input>
						</div>
						<button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
							Post
						</button>
					</form>
				</div>
			)}
			{user && role === "guide" && <AddGuideProfile />}
		</>
	);
};

export default MyProfile;
