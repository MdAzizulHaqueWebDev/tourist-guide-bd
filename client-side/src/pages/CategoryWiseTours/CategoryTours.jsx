/** @format */

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Spinner from "../../shared/Spinner";
import PackageCard from "../Home/TabSection/PackageCard";
import EmptyImg from "../../assets/no-have-any-product.jpg";
const CategoryTours = () => {
	const { category } = useParams();
	const axios = useAxios();
	const { data, isPending } = useQuery({
		queryKey: ["category-tours"],
		queryFn: async () => {
			const { data } = await axios.get(`/tours?category=${category}`);
			return data;
		},
	});
	if (isPending) return <Spinner />;
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 mt-6 gap-4 container mx-auto">
			{data.length > 0 ? (
				data.map((tour) => <PackageCard key={tour._id} tour={tour} />)
			) : (
				<div className="col-span-1 md:col-span-2 lg:col-span-3">
					<img src={EmptyImg} alt="   " className="w-full h-screen" />
				</div>
			)}
		</div>
	);
};

export default CategoryTours;
