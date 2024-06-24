/** @format */

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";
const DashboardLayout = () => {
	return (
		<>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet />
					<label
						htmlFor="my-drawer-2"
						className="btn bg-blue-400 absolute top-2 right-2 drawer-button text-2xl lg:hidden"
					>
						<IoMdMenu />
					</label>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<Sidebar />
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
