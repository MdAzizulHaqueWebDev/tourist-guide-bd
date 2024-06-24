/** @format */

import { FaHistory } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserNavNavLink = () => {
	return (
		<>
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="text-gray-900">
					<NavLink
						to="/dashboard"
						end
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="w-5 h-5 fill-current text-gray-600"
						>
							<path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
						</svg>
						<span>My Profile</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/dashboard/my-booking"
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<MdOutlineLocalGroceryStore />
						<span>Booking</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/dashboard/my-wishlist"
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="w-5 h-5 fill-current text-gray-600"
						>
							<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
						</svg>
						<span>Wishlist</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/dashboard/request-to-admin"
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<FaCodePullRequest />
						<span>Request</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/dashboard/my-story"
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<FaHistory />
						<span>My Story</span>
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default UserNavNavLink;
