/** @format */

import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const axiosPublic = useAxios();
	// const navigate = useNavigate()

	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const signInWithGoogle = () =>
		signInWithPopup(auth, new GoogleAuthProvider());

	const signInWithEmailPass = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const logOut = () => signOut(auth);

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		signInWithEmailPass,
		signInWithGoogle,
		logOut,
	};

	useEffect(() => {
		const clearUser = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			const userInfo = { email: currentUser?.email || user?.email };
			if (currentUser || user) {
				const saveUserInfo = {
					email: currentUser.email || user?.email,
					displayName: currentUser?.displayName || user?.displayName,
					photoURL: currentUser?.photoURL,
					role: "user",
					phone: "+880171489586" + Math.floor(Math.random() * 10),
				};
				await axiosPublic.post("/users", saveUserInfo);

				axiosPublic.post("/jwt", userInfo).then((res) => {
					if (res.data.token) {
						localStorage.setItem("access-token", res.data.token);
					}
				});
			} else {
				localStorage.removeItem("access-token");
			}
		});
		return () => {
			clearUser();
		};
	}, [axiosPublic, user]);

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
