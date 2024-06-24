/** @format */

import { IoMdHeartEmpty } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import toast from "react-hot-toast";
const PackageCard = ({ tour }) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const { title, tourType, tourImg, price, _id } = tour || {};
	const axios = useAxios();
	const handleWishlistButton = async () => {
		if (!user && !user?.email) {
			Swal.fire({
				title: "You Are not login",
				// text: "Pls ",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Take me login page",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
		} else {
			const packageInfo = {
				packageId: _id,
				tourType,
				title,
				tourImg,
				email: user?.email,
			};
			const { data } = await axios.post("/wishlist", packageInfo);
			if (data.insertedId) {
				Swal.fire({
					title: "Added to Wishlist",
					icon: "success",
				});
			} else {
				Swal.fire({
					title: "Already exist in your wishlist",
					icon: "error",
				});
			}
		}
	};
	const handleViewBtn = () => {};

	return (
		<div>
			<div className="max-w-md mx-auto  rounded-md max-h-62 overflow-hidden shadow-md hover:shadow-lg">
				<div className="relative">
					<img
						className="w-full hover:scale-105 h-48 transition "
						src={tourImg}
						alt="image not found"
					/>
					<div
						onClick={handleWishlistButton}
						className="absolute top-1 right-1 text-xl bg-gray-200 text-red-500 hover:bg-red-300 hover:text-white tooltip-error tooltip-left btn btn-sm tooltip px-2 py-1 m-2 rounded-md font-medium z-10"
						data-tip="Add Wishlist"
					>
						<IoMdHeartEmpty />
					</div>
				</div>
				<div className="p-4">
					<h3 className="text-lg font-medium mb-2 uppercase">{tourType}</h3>
					<p className="text-gray-600 text-sm mb-4"> {title} </p>
					<div className="flex items-center justify-between">
						<span className="text-lg">From us${price}</span>
						{user ? (
							<Link to={`/tour-details/${_id}`}>
								<button className="bg-blue-400 hover:bg-blue-500 text-gray-200 font-bold py-2 px-4 rounded">
									View Package
								</button>
							</Link>
						) : (
							<button
								onClick={() => toast.error("Pls login ago")}
								className="bg-blue-400 hover:bg-blue-500 text-gray-200 font-bold py-2 px-4 rounded"
							>
								View Package
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
