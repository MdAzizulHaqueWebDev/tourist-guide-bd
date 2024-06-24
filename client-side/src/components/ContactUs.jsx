/** @format */

import { ScrollRestoration } from "react-router-dom";

const ContactUs = () => {
	return (
		<>
			<ScrollRestoration />
			<section className="bg-[url(/Wave.svg)]" id="contact">
				<div className="mx-auto max-w-7xl backdrop-blur-sm backdrop-saturate-100 border border-gray-300 border-opacity-30 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div className="mb-4">
						<div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
							<p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
								Contact
							</p>
							<h2 className="font-heading mb-4 font-bold tracking-tight text-gray-50 dark:text-white text-3xl sm:text-5xl">
								Get in Touch
							</h2>
							<p className="mx-auto mt-4 max-w-3xl text-xl dark:text-slate-400"></p>
						</div>
					</div>
					<div className="flex items-stretch text-slate-50 justify-center">
						<div className="grid md:grid-cols-2">
							<div className="h-full pr-6">
								<p className="mt-3 mb-12 text-lg dark:text-slate-400">
									We are here to help you plan your perfect travel experience.
									Reach out to us with any questions, concerns, or booking
									inquiries.
								</p>
								<ul className="mb-6 md:mb-0">
									<li className="flex">
										<div className="flex h-10 w-10 items-center justify-center rounded bg-black">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="h-6 w-6"
											>
												<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
												<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
											</svg>
										</div>
										<div className="ml-4 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6  dark:text-white">
												Our Address
											</h3>
											<p className="dark:text-slate-400">
												1230 Maecenas Street Donec Road
											</p>
											<p className="dark:text-slate-400">New York, EEUU</p>
										</div>
									</li>
									<li className="flex">
										<div className="flex h-10 w-10 items-center justify-center rounded bg-black">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="h-6 w-6"
											>
												<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
												<path d="M15 7a2 2 0 0 1 2 2"></path>
												<path d="M15 3a6 6 0 0 1 6 6"></path>
											</svg>
										</div>
										<div className="ml-4 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6  dark:text-white">
												Contact
											</h3>
											<p className="dark:text-slate-400">
												Mobile: +1 (123) 456-7890
											</p>
											<p className="dark:text-slate-400">
												Mail: tailnext@gmail.com
											</p>
										</div>
									</li>
									<li className="flex">
										<div className="flex h-10 w-10 items-center justify-center rounded bg-black">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="h-6 w-6"
											>
												<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
												<path d="M12 7v5l3 3"></path>
											</svg>
										</div>
										<div className="ml-4 mb-4">
											<h3 className="mb-2 text-lg font-medium leading-6  dark:text-white">
												Working hours
											</h3>
											<p className="dark:text-slate-400">
												Monday - Friday: 08:00 - 17:00
											</p>
											<p className="dark:text-slate-400">
												Saturday &amp; Sunday: 08:00 - 12:00
											</p>
										</div>
									</li>
								</ul>
							</div>
							<div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
								<h2 className="mb-4 text-2xl font-bold dark:text-white">
									Ready to Get Started?
								</h2>
								<form id="contactForm">
									<div className="mb-6">
										<div className="mx-0 mb-1 sm:mb-4">
											<div className="mx-0 mb-1 sm:mb-4">
												<label
													for="name"
													className="pb-1 text-xs uppercase tracking-wider"
												></label>
												<input
													type="text"
													id="name"
													autocomplete="given-name"
													placeholder="Your name"
													className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
													name="name"
												/>
											</div>
											<div className="mx-0 mb-1 sm:mb-4">
												<label
													for="email"
													className="pb-1 text-xs uppercase tracking-wider"
												></label>
												<input
													type="email"
													id="email"
													autocomplete="email"
													placeholder="Your email address"
													className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
													name="email"
												/>
											</div>
										</div>
										<div className="mx-0 mb-1 sm:mb-4">
											<label
												for="textarea"
												className="pb-1 text-xs uppercase tracking-wider"
											></label>
											<textarea
												id="textarea"
												name="textarea"
												cols="30"
												rows="5"
												placeholder="Write your message..."
												className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
											></textarea>
										</div>
									</div>
									<div className="text-center">
										<button
											type="submit"
											className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
										>
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<p className="text-center font-bold my-3">Social</p>
					<div className="flex justify-center items-center gap-6">
						<a
							className="text-gray-700 hover:text-orange-600"
							aria-label="Visit TrendyMinds LinkedIn"
							href=""
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="h-8"
							>
								<path
									fill="currentColor"
									d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
								></path>
							</svg>
						</a>
						<a
							className="text-gray-700 hover:text-orange-600"
							aria-label="Visit TrendyMinds YouTube"
							href=""
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
								className="h-8"
							>
								<path
									fill="currentColor"
									d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
								></path>
							</svg>
						</a>
						<a
							className="text-gray-700 hover:text-orange-600"
							aria-label="Visit TrendyMinds Facebook"
							href=""
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
								className="h-8"
							>
								<path
									fill="currentColor"
									d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
								></path>
							</svg>
						</a>
						<a
							className="text-gray-700 hover:text-orange-600"
							aria-label="Visit TrendyMinds Instagram"
							href=""
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="h-8"
							>
								<path
									fill="currentColor"
									d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
								></path>
							</svg>
						</a>
						<a
							className="text-gray-700 hover:text-orange-600"
							aria-label="Visit TrendyMinds Twitter"
							href=""
							target="_blank"
						>
							<svg
								className="h-8"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
