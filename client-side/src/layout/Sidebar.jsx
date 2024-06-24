/** @format */

import { Link } from "react-router-dom";
import { FaContao, FaHome } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import UserNavlinks from "./SidebarNavLink/UserNavlinks";
import AdminNavLinks from "./SidebarNavLink/AdminNavLinks";
import GuiderNavLinks from "./SidebarNavLink/GuiderNavLinks";
const Sidebar = () => {
	const { user, loading } = useAuth();
	const { role, roleLoading } = useRole();
	if (loading || roleLoading) return;
	return (
		<>
			<div className="min-h-screen p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
				<div className="flex items-center p-2 space-x-4">
					<img
						src={user?.photoURL}
						alt=""
						className="w-12 h-12 rounded-full bg-gray-500"
					/>
					<div>
						<h2 className="text-lg font-semibold">{user?.displayName}</h2>
					</div>
				</div>
				<div className="divide-y divide-gray-300">
					{user && role === "user" && <UserNavlinks />}
					{user && role === "guide" && <GuiderNavLinks />}
					{user ? role === "admin" && <AdminNavLinks /> : undefined}
					<ul className="pt-4 pb-2  space-y-1 text-sm">
						<li>
							<Link to="/">
								<a className="flex items-center p-2 space-x-3 rounded-md">
									<FaHome />
									<span>Home</span>
								</a>
							</Link>
						</li>
						<li>
							<Link to="/contact-us">
								<a className="flex items-center p-2 space-x-3 rounded-md">
									<FaContao />
									<span>Contact Us</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
