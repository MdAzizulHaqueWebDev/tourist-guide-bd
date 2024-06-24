/** @format */

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../shared/Spinner";
import useRole from "../hooks/useRole";

const PrivateTourGuide = ({ children }) => {
	const { user, loading } = useAuth();
	const { role, roleLoading } = useRole();
	if (loading || roleLoading) return <Spinner />;
	if (user && role === "guide") return children;
	return <Navigate to={"/"} />;
};
export default PrivateTourGuide;
