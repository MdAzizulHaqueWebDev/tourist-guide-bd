/** @format */

import { Link } from "react-router-dom";
import WhyChoseUs from "../../shared/WhyChoseUs";
import Banner from "./Banner";
import ClientReview from "./ClientReview";
import OurTeamMember from "./OurTeamMember";
import Tourism from "./TabSection/Tourism";
import TourType from "./TourTypeSection/TourType";
import TouristStory from "./TouristStory/TouristStory";
import { motion, useScroll, useSpring } from "framer-motion";
import "./motion.css";
const Home = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<>
			<motion.div className="progress-bar my-14 z-40" style={{ scaleX }} />
			<Banner />
			<div className="container mx-auto">
				<p className="responsive-text font-rubik text-center text-gray-500 w-3/4 mx-auto p-6 my-3">
					Bangladesh, country of south-central Asia, located in the delta of the
					Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers in the
					northeastern part of the Indian subcontinent. The riverine country of
					Bangladesh (“Land of the Bengals”) is one of the most densely
					populated countries in the world, and its people are predominantly
					Muslim.
				</p>
				<Tourism />
			</div>
			<div>
				<TourType />
			</div>
			<div>
				<TouristStory />
				<div className="text-center my-2">
					<Link to="/stories">
						<button className="bg-blue-400 hover:bg-blue-500 text-gray-200 font-bold py-2 px-4 rounded">
							View All Story
						</button>
					</Link>
				</div>
			</div>
			<WhyChoseUs />
			<div>
				<OurTeamMember />
			</div>
			<div>
				<ClientReview />
			</div>
		</>
	);
};

export default Home;
