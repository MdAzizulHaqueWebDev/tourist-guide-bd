/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
	return (
		<>
			<div className="h-14">
				<Navbar />
			</div>
			<Outlet />
			<Footer />
		</>
	);
};

export default Main;
