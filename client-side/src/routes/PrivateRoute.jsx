/** @format */
import useAuth from "../hooks/useAuth";
import Spinner from "../shared/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	// console.log(location);
	const { user, loading } = useAuth();
	if (loading) return <Spinner />;
	if (user) return children;
	return <Navigate state={location} to={"/"} />;
};

export default PrivateRoute;
