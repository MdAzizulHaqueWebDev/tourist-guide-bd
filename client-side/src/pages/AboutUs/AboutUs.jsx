/** @format */
import ReactStars from "react-rating-stars-component";
import useReviews from "../../hooks/useReviews";
import Spinner from "../../shared/Spinner";
const AboutUs = () => {
	const { isPending, reviews } = useReviews();
	if (isPending) return <Spinner />;
	return (
		<div className="bg-repeat-y ">
			<div className=" bg-opacity-10 backdrop-blur-lg backdrop-saturate-100  ">
				<header className=" text-center py-10 border-b-2 shadow">
					<h1 className="text-4xl font-bold mt-16">About Us</h1>
				</header>

				<section className="text-center py-12 shadow-md border-b-2 px-4">
					<h2 className="text-2xl font-bold">Mission And Values</h2>
					<p className="mt-4 max-w-2xl mx-auto">
						Our mission is to provide exceptional travel experiences with a
						focus on availability, reliability, and support
					</p>
					<div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
						<div className="rounded hover:shadow-blue-200 border  hover:shadow-xl transition-shadow  hover:scale-110">
							<h3 className="text-xl font-bold">50+ </h3>
							<p>Experienced Tour Guides</p>
						</div>
						<div className="rounded transform hover:shadow-blue-200 border  hover:shadow-xl transition-shadow  hover:scale-110">
							<h3 className="text-xl font-bold">25+</h3>
							<p>Years of Experience</p>
						</div>
					</div>
				</section>

				<section className=" py-12 px-4 border-b-2 ">
					<h2 className="text-2xl font-bold text-center">Our Vision</h2>
					<p className="mt-4 text-center max-w-2xl mx-auto">
						Travel anytime, anywhere. We aim to revolutionize the travel
						industry by making quality travel experiences accessible to
						everyone.
					</p>
				</section>

				<section className="text-center py-12 px-4 border-b-2 ">
					<h2 className="text-2xl font-bold">Our Travel Specialties</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
						<div className="p-4 shadow-lg rounded-lg  hover:shadow-blue-200 border  hover:shadow-xl transition-shadow ">
							<h3 className="text-xl font-bold ">Cultural Tours</h3>
						</div>
						<div className="p-4 shadow-lg rounded-lg  hover:shadow-blue-200 border  hover:shadow-xl transition-shadow ">
							<h3 className="text-xl font-bold">Adventure Tours</h3>
						</div>
						<div className="p-4 shadow-lg rounded-lg  hover:shadow-blue-200 border  hover:shadow-xl transition-shadow ">
							<h3 className="text-xl font-bold">Historical Tours</h3>
						</div>
						<div className="p-4 shadow-lg rounded-lg  hover:shadow-blue-200 border  hover:shadow-xl transition-shadow ">
							<h3 className="text-xl font-bold">Culinary Tours</h3>
						</div>
					</div>
				</section>

				<section className="border-b-2  py-12 px-4">
					<h2 className="text-2xl font-bold text-center">
						State-Of-The-Art Technology
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
						<div className="p-4 shadow-lg rounded-lg hover:shadow-blue-200 border transition-shadow hover:">
							<h3 className="text-xl font-bold">Advanced Booking System</h3>
							<p className=" mt-2">
								We utilize the latest technology for seamless booking
								experiences.
							</p>
						</div>
						<div className="p-4 shadow-lg rounded-lg hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Virtual Tours</h3>
							<p className=" mt-2">
								Explore destinations from the comfort of your home.
							</p>
						</div>
						<div className="p-4 shadow-lg rounded-lg  hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Mobile App</h3>
							<p className=" mt-2">
								Manage your tours and itineraries on the go.
							</p>
						</div>
						<div className="p-4 shadow-lg rounded-lg hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Secure Payment Gateway</h3>
							<p className=" mt-2">
								Secure and easy transactions for your peace of mind.
							</p>
						</div>
					</div>
				</section>

				<section className="text-center py-12 px-4">
					<h2 className="text-2xl font-bold">
						Committed To Your Travel Satisfaction
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
						<div className="p-4 shadow-lg rounded-lg hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Book Tour</h3>
						</div>
						<div className="p-4 shadow-lg rounded-lg  hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Expert Guides</h3>
						</div>
						<div className="p-4 shadow-lg rounded-lg hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Comprehensive Packages</h3>
						</div>
						<div className="p-4 shadow-lg rounded-lg hover:shadow-blue-200 border  hover:shadow-xl transition-shadow">
							<h3 className="text-xl font-bold">Customer Support</h3>
						</div>
					</div>
				</section>

				<section className=" text-center py-12 px-4">
					<h2 className="text-2xl font-bold">Get Consultation</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
						{reviews.map((review, indx) => (
							<div
								key={indx}
								className="p-4 rounded-lg hover:shadow-blue-200 border  hover:shadow-xl transition-shadow"
							>
								<p>" {review.reviewText} "</p>
								<h3 className="mt-4 font-bold">{review.reviewer}</h3>
								<div>
									<ReactStars
										count={5}
										size={24}
										onChange={() => {}}
										isHalf={true}
										emptyIcon={<i className="far fa-star"></i>}
										halfIcon={<i className="fa fa-star-half-alt"></i>}
										filledIcon={<i className="fa fa-star"></i>}
										activeColor="#ffd700"
									/>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="text-center py-12 px-4 w-full">
					<h2 className="text-2xl font-bold">
						Get Answer To Your Most Asked Questions
					</h2>
					<div className="mt-8">
						<div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 hover: scale-90">
							<h3 className="text-xl font-bold">
								How do I book a tour online?
							</h3>
							<p className="mt-2 ">
								You can book a tour online through our website or mobile app.
							</p>
						</div>
						<div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 hover: scale-90 mt-4">
							<h3 className="text-xl font-bold">
								What types of tours do you offer?
							</h3>
							<p className="mt-2 ">
								We offer a wide range of tours including cultural, adventure,
								historical, and culinary tours.
							</p>
						</div>
						<div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 hover: scale-90 mt-4">
							<h3 className="text-xl font-bold">
								Do you provide customized tour packages?
							</h3>
							<p className="mt-2 ">
								Yes, we offer customized tour packages to cater to your specific
								preferences.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;
