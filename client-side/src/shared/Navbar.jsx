/** @format */

import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import placeholderAvatar from "../assets/placeholder-avatar.jpg";
const Navbar = () => {
	const { user, logOut, loading } = useAuth();
	const [theme, setTheme] = useState();
	localStorage.setItem("theme", theme);
	const localTheme = localStorage.getItem("theme");
	document.querySelector("html").setAttribute("data-theme", localTheme);
	const userImg = user?.photoURL || placeholderAvatar;
	const getNavActiveClass = (isActive) =>
		`${isActive && "bg-blue-300 font-bold rounded"}`;
	const navLinks = (
		<>
			<NavLink
				className={({ isActive }) => getNavActiveClass(isActive)}
				to={"/"}
			>
				<label htmlFor="my-drawer-3">
					<li>
						<a>Home</a>
					</li>
				</label>
			</NavLink>
			<NavLink
				className={({ isActive }) => getNavActiveClass(isActive)}
				to={"/community"}
			>
				<li>
					<a>Community</a>
				</li>
			</NavLink>
			<NavLink
				className={({ isActive }) => getNavActiveClass(isActive)}
				to={"/blogs"}
			>
				<li>
					<a>Blogs</a>
				</li>
			</NavLink>
			<NavLink
				className={({ isActive }) => getNavActiveClass(isActive)}
				to={"/about-us"}
			>
				<li>
					<a>About us</a>
				</li>
			</NavLink>
			<NavLink
				className={({ isActive }) => getNavActiveClass(isActive)}
				to={"/contact-us"}
			>
				<li>
					<a>Contact us</a>
				</li>
			</NavLink>
		</>
	);
	return (
		<section className={`z-20 fixed top-0 w-full bg-center`}>
			<div className="backdrop-filter backdrop-blur-[100px] backdrop-saturate-[300%] bg-[rgba(255,_255,_255,_0.31)] ">
				<section className="container p-1 mx-auto">
					<div className="drawer">
						<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

						{/* large device content here */}
						<div className="drawer-content flex flex-col">
							<section className="w-full items-center flex ">
								{/* menu icon for small device */}
								<div className="flex-none lg:hidden">
									<label
										htmlFor="my-drawer-3"
										aria-label="open sidebar"
										className="btn btn-xl text-2xl btn-ghost"
									>
										<MdMenuOpen />
									</label>
								</div>

								<div className="flex-1 flex items-center gap-2">
									<Link to={"/"}>
										<img
											src={
												"https://marketplace.canva.com/EAFkAfFwssg/1/0/1600w/canva-black-and-orange-simple-geometric-tour-travel-logo-WPE-LAniw0U.jpg"
											}
											className="drop-shadow md:w-10 w-10 rounded-md"
											alt="navbar img"
										/>
									</Link>
									<h1 className="font-sans font-bold text-sm md:text-xl">
										Tour Guides BD
									</h1>
								</div>

								<div className="flex-1 justify-end items-center flex gap-3 px-2 mx-2">
									<div className="flex-none  hidden lg:block">
										{/*large device Navbar menu content here */}
										<ul className="menu justify-center font-semibold items-center menu-horizontal">
											{navLinks}
										</ul>
									</div>
									<div>
										<label className="relative inline-flex items-center cursor-pointer">
											<input
												onChange={(e) => {
													if (e.target.checked) {
														setTheme("dark");
													} else {
														setTheme("light");
													}
												}}
												className="sr-only peer"
												value=""
												type="checkbox"
											/>
											<div className="w-14 h-8  rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
										</label>
									</div>
									{user ? (
										<div className="dropdown dropdown-end dropdown-hover">
											<div tabIndex={0} role="button" className="avatar">
												<div className="md:w-10 w-8 lg:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
													<img src={userImg} />
												</div>
											</div>

											<aside
												tabIndex={0}
												className="flex dropdown-content z-[1] menu  shadow bg-base-100 rounded-box flex-col p-6 overflow-y-auto dark:border-gray-700"
											>
												<div className="flex flex-col space-y-3 items-center mt-6 -mx-2">
													<img
														className="object-cover w-12 md:w-24 md:h-24 mx-2 rounded-full"
														src={userImg}
														alt="image not found"
													/>
													<h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
														{user?.displayName}
													</h4>
													<p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
														{user?.email}
													</p>
													<Link to="/dashboard">
														<button className="btn-wide btn btn-sm btn-error">
															Dashboard
														</button>
													</Link>
													<button
														onClick={() =>
															logOut().then(() =>
																toast.success("Logout Successfully"),
															)
														}
														className="btn-wide btn btn-sm btn-error"
													>
														Logout
													</button>
												</div>
											</aside>
										</div>
									) : loading ? (
										<div className="avatar">
											<div tabIndex={0} role="button" className="avatar">
												<div className="md:w-10 w-8 lg:w-12 rounded-full ring ring-offset-base-100 ring-offset-2">
													<img src={placeholderAvatar} />
												</div>
											</div>
										</div>
									) : (
										<div>
											<NavLink to="/login">
												<button className="btn btn-sm bg-blue-300 md:btn-md">
													Login
												</button>
											</NavLink>
										</div>
									)}
								</div>
							</section>
						</div>

						{/* small device content */}
						<div className="drawer-side  z-[9999]">
							<label
								htmlFor="my-drawer-3"
								aria-label="close sidebar"
								className="drawer-overlay"
							></label>
							{/* Sidebar content here */}
							<ul className="menu relative bg-blue-200 p-4 w-48 md:w-64 min-h-full ">
								<div className="absolute right-2  z-20  top-2">
									<label
										htmlFor="my-drawer-3"
										className="btn-circle hover:btn-error btn-md btn"
									>
										<FaX />
									</label>
								</div>
								<div className="mt-2 font-semibold">{navLinks}</div>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Navbar;
