/** @format */

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../shared/Spinner";
import useRole from "../hooks/useRole";

const PrivateAdmin = ({ children }) => {
	const { user, loading } = useAuth();
	const { role, roleLoading } = useRole();
	if (loading || roleLoading) return <Spinner />;
	if (user && role === "admin") return children;
	return <Navigate to={"/"} />;
};

export default PrivateAdmin;
