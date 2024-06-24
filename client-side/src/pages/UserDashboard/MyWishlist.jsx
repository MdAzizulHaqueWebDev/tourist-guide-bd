/** @format */
import { TbListDetails } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useWishlist from "../../hooks/useWishlist";
import { Link } from "react-router-dom";
import Spinner from "../../shared/Spinner";
import SectionTitle from "../../shared/SectionTitle";
import EmptyStore from "../../assets/no-have-any-product.jpg";
const MyWishlist = () => {
	const { wishlist, refetch, isPending, loading } = useWishlist();
	const axios = useAxios();
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios.delete(`/deletePackage/${id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Delete success",
							showConfirmButton: false,
							timer: 500,
						});
					}
				});
			}
		});
	};
	if (isPending || loading) return <Spinner />;
	return (
		<>
			<>
				<SectionTitle heading={"My Wishlist Package"} />
				{wishlist?.length > 0 ? (
					<div className="bg-gray-100 font-bold w-full p-5">
						<div className="overflow-x-auto rounded-t-2xl">
							<table className="table ">
								{/* head */}
								<thead>
									<tr className="bg-orange-200 ">
										<th></th>
										<th>Package Image</th>
										<th>Package Name</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{/* row 1 */}
									{wishlist?.map((item, index) => (
										<tr key={item._id}>
											<td>{index + 1}</td>
											<td>
												<div className="flex items-center gap-3">
													<div className="avatar">
														<div className="mask mask-squircle w-12 h-12">
															<img src={item?.tourImg} alt="img not found" />
														</div>
													</div>
												</div>
											</td>
											<td>{item.title}</td>
											<td className="flex gap-2 flex-col md:flex-row items-center">
												<button
													onClick={() => handleDelete(item._id)}
													className="btn btn-ghost btn-sm bg-[#EA738D] text-2xl"
												>
													<MdDelete />
												</button>
												<Link to={`/tour-details/${item.packageId}`}>
													<button
														data-tip="Go Details"
														className="btn tooltip btn-ghost btn-sm bg-[#89ABE3] text-2xl"
													>
														<TbListDetails />{" "}
													</button>
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				) : (
					<div>
						<img
							className="rounded shadow mx-auto w-11/12"
							src={EmptyStore}
							alt=""
						/>
					</div>
				)}
			</>
		</>
	);
};

export default MyWishlist;
