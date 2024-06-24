/** @format */

import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import "./Footer.css";
import { MdOutlineTravelExplore } from "react-icons/md";
const Footer = () => {
	return (
		<div id="animation" className="bg-cover mt-6">
			<div className="max-w-screen-lg px-4 sm:px-6 text-gray-100 sm:grid md:grid-cols-4 mt-10 sm:grid-cols-2 mx-auto">
				<div className="p-5 md:p-0 flex flex-col gap-3 justify-center  md:items-center items-start">
					<h3 className="font-bold text-4xl md:text-7xl">
						<MdOutlineTravelExplore />
					</h3>
					<p className="font-bold text-red-100">Tour Guides BD</p>
				</div>
				<div className="p-5">
					<div className="text-sm uppercase  font-bold">Resources</div>
					<a className="my-3 block" href="/#">
						Blogs <span className=" text-xs p-1"></span>
					</a>
					<a className="my-3 block" href="/#">
						Our Packages <span className=" text-xs p-1"></span>
					</a>
					<a className="my-3 block" href="/#">
						Support <span className=" text-xs p-1">New</span>
					</a>
				</div>
				<div className="p-5">
					<div className="text-sm uppercase  font-bold">Support</div>
					<a className="my-3 block" href="/#">
						Help Center <span className=" text-xs p-1"></span>
					</a>
					<a className="my-3 block" href="/#">
						Privacy Policy <span className=" text-xs p-1"></span>
					</a>
					<a className="my-3 block" href="/#">
						Conditions <span className=" text-xs p-1"></span>
					</a>
				</div>
				<div className="p-5">
					<div className="text-sm uppercase  font-bold">Contact us</div>
					<a className="my-3 block" href="/#">
						YYY, Floor 4 San Francisco, CA
						<span className=" text-xs p-1"></span>
					</a>
					<a className="my-3 block" href="/#">
						contact@company.com
						<span className=" text-xs p-1"></span>
					</a>
					<div className="items-center gap-3 flex">
						<FaGoogle />
						<FaInstagram />
						<FaFacebook />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
