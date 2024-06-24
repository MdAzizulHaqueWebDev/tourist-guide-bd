/** @format */

import { Link } from "react-router-dom";
import ErrorPage404 from "../assets/404.gif";
const ErrorPage = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="relative">
				<img src={ErrorPage404} alt="" className="w-full" />
				<Link to={"/"}>
					<button className="btn btn-wide absolute top-[75%] left-[40%] btn-error">
						Go Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
