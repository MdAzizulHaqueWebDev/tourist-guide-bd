/** @format */

import { useQuery } from "@tanstack/react-query";
import {
	MdDeleteOutline,
	MdOutlineAdminPanelSettings,
	MdOutlineRecordVoiceOver,
} from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecureInstance from "../../hooks/useAxiosSecureInstance";
import Spinner from "../../shared/Spinner";
import SectionTitle from "../../shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
const ManageUsers = () => {
	const { loading } = useAuth();
	const axiosSecure = useAxiosSecureInstance();
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	const {
		data: users = [],
		isPending,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["users", search, sort],
		queryFn: async () => {
			const { data } = await axiosSecure.get(
				`/all-users?search=${search}&sort=${sort}`,
			);
			return data;
		},
	});

	const handleMakeAdmin = (user) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Do Admin!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.patch(`/users/make-admin/${user}`).then((res) => {
					if (res.data.modifiedCount > 0) {
						refetch();
						Swal.fire({
							title: "Done!",
							text: "Your users has been Admin.",
							icon: "success",
						});
					}
				});
			}
		});
	};

	const handleMakeGuider = (user) => {
		Swal.fire({
			title: "Are you sure make guider?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Make it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.patch(`/users/make-guider/${user}`).then((res) => {
					if (res.data.modifiedCount > 0) {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Make Guider success",
							showConfirmButton: false,
							timer: 800,
						});
					}
				});
			}
		});
	};
	const handleDeleteUser = (user) => {
		Swal.fire({
			title: "Are you sure Delete user?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/users/delete/${user}`).then((res) => {
					console.log(res.data);
					if (res.data.deletedCount) {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Delete User success",
							showConfirmButton: false,
							timer: 800,
						});
					} else {
						toast.error("Maybe Happen a Bug ");
					}
				});
			}
		});
	};
	const handleSearch = (event) => {
		event.preventDefault();
		const search = event.target.search.value;
		setSearch(search);
	};

	if (isPending || isLoading || loading) return <Spinner />;
	return (
		<>
			<SectionTitle heading={"All users"} />
			<div className="bg-gray-100 w-full px-3 font-bold p-3">
				<form
					onSubmit={handleSearch}
					className="flex flex-col my-3 md:flex-row gap-3"
				>
					<div className="flex">
						<input
							type="text"
							name="search"
							placeholder="Search for by email you like"
							className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-300 focus:outline-none focus:border-sky-300"
						/>
						<button
							type="submit"
							className="bg-sky-300 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
						>
							Search
						</button>
					</div>
					<select
						onChange={(e) => setSort(e.target.value)}
						id="roleType"
						name="roleType"
						className="w-full h-10 border-2 border-sky-300 focus:outline-none focus:border-sky-300 text-sky-300 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
					>
						<option value="All" selected="">
							Filter By Role
						</option>
						<option value="user">User</option>
						<option value="guide">Guide</option>
						<option value="admin">Admin</option>
					</select>
				</form>
				<div className="overflow-x-auto rounded-t-2xl">
					<table className="table">
						{/* head */}
						<thead>
							<tr className="bg-orange-200 ">
								<th></th>
								<th>Email</th>
								<th>IsRequested</th>
								<th>Role</th>
								<th className="ml-3">Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{users?.map((user, index) => (
								<tr key={user._id}>
									<td>{index + 1}</td>
									<td>{user?.email}</td>
									<td>{user?.status == "requested" && user.role == 'user' ? user?.status : ""}</td>
									<td>{user?.role}</td>
									<td className="flex flex-col gap-2 md:flex-row">
										<button
											disabled={
												user?.role === "admin" || user?.role === "guide"
											}
											onClick={() => handleMakeAdmin(user?.email)}
											data-tip="Make Admin"
											className="btn btn-ghost btn-sm tooltip bg-[#89ABE3] text-2xl"
										>
											<MdOutlineAdminPanelSettings />
										</button>
										<button
											disabled={
												user?.role === "admin" || user?.role === "guide"
											}
											onClick={() => handleMakeGuider(user?.email)}
											data-tip="Make Guide"
											className="btn btn-ghost btn-sm tooltip bg-[#EA738D] text-2xl"
										>
											<MdOutlineRecordVoiceOver />
										</button>
										{user.role === "admin" ? (
											""
										) : (
											<button
												onClick={() => handleDeleteUser(user?.email)}
												data-tip="Delete User"
												className="btn btn-ghost btn-sm tooltip bg-[#EA738D] text-2xl"
											>
												<MdDeleteOutline />
											</button>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ManageUsers;
