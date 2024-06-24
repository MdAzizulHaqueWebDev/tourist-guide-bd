/** @format */

import { uploadImage } from "../../utils/api/uploadImage";

const AddGuideProfile = () => {
	const handleAddGuideForm = async (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const age = form.age.value;
		const image = form.photoURL.files[0];
		const { data } = image && (await uploadImage(image));
		const photoURL = image
			? data.display_url
			: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=900&t=st=1718014975~exp=1718015575~hmac=e4523fe7fb8935eb2234ab8e1b30d574c669460ae8257c9ca9b46e20c99b25ce";
		const phone = form.phone.value;
		const facebook = form.facebook.value;
		const twitter = form.twitter.value;
		const language = form.language.value;
		const yearsOfExperience = form.yearsOfExperience.value;
		const specialSkill = form.specialSkills.value;
		const basicInformation = {
			name,
			age,
			photoURL,
			email,
			phone,
			facebook,
			twitter,
		};
		const professionalInformation = {
			languagesSpoken: [language],
			yearsOfExperience,
		};
		const specialSkills = [specialSkill];
		const faqs = [
			{
				question: "What should I bring on the tour?",
				answer: "Comfortable shoes, a hat, sunscreen, and a camera.",
			},
			{
				question: "Are meals included?",
				answer: "Yes, meals are included in the package.",
			},
		];

		const guideProfileInfo = {
			basicInformation,
			professionalInformation,
			specialSkills,
			faqs,
		};
		// console.log(guideProfileInfo), "data";
	};
	return (
		<div>
			<div className="md:mx-10 w-full mx-2 md:mt-4 border-2 hover:border-blue-400 rounded-lg">
				<div className="text-center font-bold">Contact Us</div>
				<div className="mt-3 text-center text-4xl font-bold">
					Add Another Guide
				</div>
				<form onSubmit={handleAddGuideForm} className="md:p-8 p-6">
					<div className="flex flex-col md:flex-row gap-4">
						<input
							required
							type="Name"
							name="name"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="Full Name *"
						/>
						<input
							required
							type="email"
							name="email"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="Email *"
						/>
					</div>
					<div className="flex my-3 flex-col md:flex-row gap-4">
						<input
							required
							type="text"
							name="phone"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder=" Phone +00 *"
						/>{" "}
						<input
							required
							type="number"
							name="yearsOfExperience"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="Year of experience *"
						/>
					</div>

					<div className="flex my-3 flex-col md:flex-row gap-4">
						<input
							required
							type="url"
							name="twitter"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="twitter *"
						/>
						<input
							required
							type="url"
							name="facebook"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="Facebook *"
						/>
					</div>

					<div className="flex my-3 flex-col md:flex-row gap-4">
						<input
							required
							type="text"
							name="language"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="languagesSpoken *"
						/>

						<input
							required
							type="text"
							name="specialSkills"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="specialSkills *"
						/>
					</div>
					<div className="flex my-3 flex-col md:flex-row gap-4">
						<input
							required
							type="text"
							name="age"
							className="mt-1 block w-full md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
							placeholder="age *"
						/>
						<label
							className="flex  cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
							tabIndex="0"
						>
							<span
								htmlFor="photo-dropbox"
								className="flex items-center space-x-2"
							>
								<svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
									<path
										d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="24"
									></path>
									<path
										d="M80,128a80,80,0,1,1,144,48"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="24"
									></path>
									<polyline
										points="118.1 161.9 152 128 185.9 161.9"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="24"
									></polyline>
									<line
										x1="152"
										y1="208"
										x2="152"
										y2="128"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="24"
									></line>
								</svg>
								<span className="text-xs font-medium text-gray-600">
									Drop photo to Attach, or
									<span className="text-blue-600 underline">browse</span>
								</span>
							</span>
							<input
								required
								id="photo-dropbox"
								name="photoURL"
								type="file"
								className="sr-only"
							/>
						</label>
					</div>
					<div className="text-center">
						<button className="cursor-pointer rounded-lg bg-blue-400 px-8 py-5 text-sm font-semibold text-white">
							Add Guide
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddGuideProfile;
