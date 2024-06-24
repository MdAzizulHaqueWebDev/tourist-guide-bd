/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import TourDetails from "../pages/Home/TourDetails/TourDetails";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/UserDashboard/MyProfile";
import MyBookings from "../pages/UserDashboard/MyBookings";
import MyWishlist from "../pages/UserDashboard/MyWishlist";
import MyStory from "../pages/UserDashboard/MyStory";
import AddPackage from "../pages/AdminDashboard/AddPackage";
import ManageUsers from "../pages/AdminDashboard/ManageUsers";
import TourAssigned from "../pages/TourGuideDashboard/TourAssigned";
import RequestToAdminMakeGuider from "../pages/UserDashboard/RequestToAdminMakeGuider";
import Blogs from "../pages/Blogs/Blogs";
import StoryDetails from "../pages/Home/TouristStory/StoryDetails";
import TouristStory from "../pages/Home/TouristStory/TouristStory";
import CategoryTours from "../pages/CategoryWiseTours/CategoryTours";
import GuideProfile from "../components/Profile/GuideProfile";
import Community from "../pages/Community/Community";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs";
import PrivateRoute from "./PrivateRoute";
import PrivateAdmin from "./PrivateAdmin";
import PrivateTourGuide from "./PrivateTourGuide";
import ErrorPage from "../components/ErrorPage";
import OurPackage from "../pages/Home/TabSection/OurPackage";
const routes = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/tour-details/:id",
				element: <TourDetails />,
			},
			{
				path: "/tours/:category",
				element: <CategoryTours />,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
			{
				path: "/all-packages",
				element: <OurPackage />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
			},
			{
				path: "/about-us",
				element: <AboutUs />,
			},
			{
				path: "/community",
				element: <Community />,
			},
			{
				path: "/story-details/:id",
				element: <StoryDetails />,
			},
			{
				path: "/stories",
				element: <TouristStory />,
			},
			{
				path: "/profile/:id",
				element: <GuideProfile />,
			},
		],
	},
	// dashboard related routes
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			// user related routes
			{
				index: true,
				element: <MyProfile />,
			},
			{
				path: "my-booking",
				element: <MyBookings />,
			},
			{
				path: "my-wishlist",
				element: <MyWishlist />,
			},
			{
				path: "my-story",
				element: <MyStory />,
			},
			{
				path: "request-to-admin",
				element: <RequestToAdminMakeGuider />,
			},
			// admin related api
			{
				path: "add-package",
				element: (
					<PrivateAdmin>
						<AddPackage />
					</PrivateAdmin>
				),
			},
			{
				path: "manage-users",
				element: (
					<PrivateAdmin>
						<ManageUsers />
					</PrivateAdmin>
				),
			},
			// guider related api
			{
				path: "my-tour-assigned",
				element: (
					<PrivateTourGuide>
						<TourAssigned />
					</PrivateTourGuide>
				),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);
export default routes;
