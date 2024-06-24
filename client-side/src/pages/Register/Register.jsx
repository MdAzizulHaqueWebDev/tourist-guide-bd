/** @format */
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { uploadImage } from "../../utils/api/uploadImage";
import { MdFolder } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
const Register = () => {
	const { createUser } = useAuth();
	const navigate = useNavigate();
	const { signInWithGoogle } = useAuth();
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const form = event.target;
		const img = form.image.files[0];
		const { data } = await uploadImage(img);
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		createUser(email, password)
			.then(async (res) => {
				await updateProfile(res.user, {
					displayName: name,
					photoURL: data?.display_url,
				});
				toast.success("Sign Up Success");
				if (res) {
					return window.location.replace("/");
				}
			})
			.catch((err) => toast.error(err));
	};
	const handleGoogleLogin = () => {
		signInWithGoogle().then((res) => {
			if (res) {
				toast.success("Login Success");
				navigate("/");
			}
		});
	};

	return (
		<div>
			<div className="h-full bg-[url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100)] bg-cover bg-no-repeat p-4 dark:bg-gray-900">
				<div className="flex justify-center md:px-6 py-4">
					<div className="w-full mx-auto lg:w-7/12 bg-white bg-opacity-65 backdrop-blur-md backdrop-saturate-180 border border-gray-300 border-opacity-30   dark:bg-gray-700 p-5 rounded-lg">
						<h3 className="py-2 text-2xl text-center text-gray-800 dark:text-white">
							Create an Account!
						</h3>
						<form
							onSubmit={handleSubmit}
							className="px-8 pt-6 pb-8 dark:bg-gray-800 rounded"
						>
							<div className="mb-4 md:flex md:justify-around">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label
										className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
										htmlFor="email"
									>
										Email
									</label>
									<input
										required
										name="email"
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email"
									/>
								</div>
								<div className="md:ml-2">
									<label
										className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
										htmlFor="lastName"
									>
										UserName
									</label>
									<input
										required
										name="name"
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="UserName"
										type="text"
										placeholder="UserName"
									/>
								</div>
							</div>
							<div className="mb-4 md:flex md:justify-around">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label
										className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
										htmlFor="password"
									>
										Password
									</label>
									<input
										required
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										name="password"
										placeholder="******************"
									/>
								</div>
							</div>
							<div className="mb-4 lg:ml-5 md:ml-[90px]">
								<div className="p-1 bg-white">
									<div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
										<div className="md:flex">
											<div className="w-full p-3">
												<div className="relative border-dotted h-12 rounded-lg  border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
													<div className="absolute">
														<div className="flex flex-col items-center">
															<MdFolder />
															<p className="block text-gray-400 font-normal">
																Attach you image here
															</p>
														</div>
													</div>

													<input
														required
														type="file"
														className="h-full w-full opacity-0"
														name="image"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									disabled={loading}
									type="submit"
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
								>
									{loading ? (
										<div className="flex justify-center">
											<ImSpinner9 className="animate-spin text-center" />
										</div>
									) : (
										"Register Account"
									)}
								</button>
								<div className="divider divider-neutral">
									Or Login with Google
								</div>
								<button
									onClick={handleGoogleLogin}
									className="w-full mt-2 mx-auto max-w-xs font-bold shadow-sm rounded-lg py-1 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
								>
									<div className="bg-white p-2 rounded-full">
										<svg className="w-4" viewBox="0 0 533.5 544.3">
											<path
												d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
												fill="#4285f4"
											/>
											<path
												d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
												fill="#34a853"
											/>
											<path
												d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
												fill="#fbbc04"
											/>
											<path
												d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
												fill="#ea4335"
											/>
										</svg>
									</div>
									<span className="ml-4">Sign In with Google</span>
								</button>
							</div>
							<hr className="mb-1 border-t" />
						</form>
						<div className="text-center">
							<Link
								className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								to={"/login"}
							>
								Already have an account? Login!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
