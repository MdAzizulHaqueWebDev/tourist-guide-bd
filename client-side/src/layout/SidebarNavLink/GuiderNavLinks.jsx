/** @format */

import { FaBookmark, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const GuiderNavLinks = () => {
	return (
		<>
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="text-gray-900">
					<NavLink
						end
						to="/dashboard"
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<FaUser />
						<span>My Profile</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/dashboard/my-tour-assigned"
						className={({ isActive }) =>
							` ${
								isActive && "bg-slate-300"
							} flex items-center p-2 space-x-3 rounded-md `
						}
					>
						<FaBookmark />
						<span>My Assigned Tours</span>
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default GuiderNavLinks;
