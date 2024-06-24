/** @format */

import { TbListDetails } from "react-icons/tb";
import useStory from "../../hooks/useStory";
import Spinner from "../../shared/Spinner";
import { Link } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle";
import Empty from "../../assets/no-have-any-product.jpg";
const MyStory = () => {
	const { story, isPending } = useStory();
	if (isPending) return <Spinner />;
	return (
		<div className="p-4">
			<SectionTitle heading={"My Story"} />
			{story.length > 0 ? (
				<div className="overflow-x-auto rounded-t-2xl mt-6">
					<table className="table ">
						{/* head */}
						<thead>
							<tr className="bg-orange-200">
								<th></th>
								<th>Tour Image</th>
								<th>Tour Name</th>
								<th>Written Date</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{story.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img src={item?.image} alt="img not found" />
												</div>
											</div>
										</div>
									</td>
									<td>{item?.tourTitle}</td>
									<td>{item?.writtenDate}</td>
									<td>
										<Link to={"/"}>
											<button
												data-tip="Go Details"
												className="btn tooltip btn-ghost btn-sm bg-[#89ABE3] text-2xl"
											>
												<TbListDetails />
											</button>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div>
					<img className="rounded shadow mx-auto w-11/12" src={Empty} alt="" />
				</div>
			)}
		</div>
	);
};

export default MyStory;
