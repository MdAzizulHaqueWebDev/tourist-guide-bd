/** @format */

import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild,
} from "@headlessui/react"; /** @format */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecureInstance from "../../hooks/useAxiosSecureInstance";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../shared/Spinner";
import SectionTitle from "../../shared/SectionTitle";
import toast from "react-hot-toast";
import { Fragment, useState } from "react";

// stripe related import
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// todo: import pk key from .env
const stripePromise = loadStripe(
	"pk_test_51PRF7YGV4TI3HhCJIFHL0TI88KpHwY3Bsm5IENJyJ9fkLqO4MWGKLy5nnqo7ILAYW9URU2ebCAOmgb3xYVf5Z4Ev00KJAmHxLN",
);
const MyBookings = () => {
	let [isOpen, setIsOpen] = useState(false);
	const axiosSecure = useAxiosSecureInstance();
	const { user, loading } = useAuth();
	const {
		data: bookings = [],
		isPending,
		refetch,
	} = useQuery({
		queryKey: ["bookings"],
		queryFn: async () => {
			if (!user) return [];
			const { data } = await axiosSecure.get(`/bookings/${user?.email}`);
			return data;
		},
	});

	const handleCancelBtn = async (id) => {
		const { data } = await axiosSecure.delete(`/bookings/${id}`);
		if (data.deletedCount) {
			refetch();
			toast.success("Order Cancelled");
		}
	};

	if (loading || isPending) return <Spinner />;
	return (
		<>
			<Transition
				appear
				show={isOpen}
				onClose={() => setIsOpen(false)}
				as={Fragment}
			>
				<Dialog as="div" className="relative z-10">
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</TransitionChild>
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<TransitionChild
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<DialogTitle
										as="h3"
										className="text-lg font-medium text-center leading-6 text-gray-900"
									>
										Pay Now
									</DialogTitle>

									<div className="mt-2">
										<p className="text-sm text-gray-500">Package Title:</p>
									</div>
									<div className="mt-2">
										<p className="text-sm text-gray-500">Price:</p>
									</div>
									<hr className="mt-8 " />
									{/* checkout form */}
									<Elements stripe={stripePromise}>
										<CheckoutForm setIsOpen={setIsOpen} />
									</Elements>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
			<SectionTitle heading={"My Bookings"} />
			<div className="bg-white w-full mx-3 font-semibold p-3">
				<header className="flex justify-start uppercase items-center">
					<h3 className="text-2xl my-3">Packages: {bookings.length}</h3>
				</header>
				<div className="overflow-x-auto rounded-t-2xl">
					<table className="table">
						{/* head */}
						<thead>
							<tr className="bg-orange-200 ">
								<th></th>
								<th>Package</th>
								<th>Guide Name</th>
								<th>Date</th>
								<th>Price</th>
								<th>Status</th>
								<th className="ml-3">Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{bookings?.map((booking, index) => (
								<tr key={booking._id}>
									<td>{index + 1}</td>
									<td>{booking?.title}</td>
									{/* todo: will name not email */}
									<td>{booking?.guideEmail}</td>
									<td>{booking?.date}</td>
									<td>{booking?.price}</td>
									<td>{booking?.status}</td>
									<td className="flex flex-col gap-2 md:flex-row">
										{booking?.status === "review" && (
											<button
												onClick={() => handleCancelBtn(booking._id)}
												data-tip="cancel booking"
												className="btn btn-ghost btn-sm tooltip bg-red-400 text-2xl"
											>
												Cancel
											</button>
										)}
										{booking?.status === "accepted" && (
											<button
												onClick={() => setIsOpen(true)}
												data-tip="Pay now"
												className="btn btn-ghost btn-sm tooltip bg-[#89ABE3] text-2xl"
											>
												pay
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

export default MyBookings;
