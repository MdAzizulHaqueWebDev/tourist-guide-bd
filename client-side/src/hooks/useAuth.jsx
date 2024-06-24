/** @format */

import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const useAuth = () => {
	const authInfo = useContext(AuthContext);
	return authInfo;
};

export default useAuth;
