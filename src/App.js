import react, { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import About from "./container/welcome/About"
import LandingPage from "./container/welcome/LandingPage"
import Signin from "./container/welcome/Signin"
import Signup from "./container/welcome/Signup"

import UserDashboard from "./container/user/UserDashboard"
import Subscriptions from "./container/user/Subscriptions"
import Manage from "./container/user/Manage"
import CreateCourse from "./container/user/CreateCourse"
import Guidelines from "./container/user/Guidelines"
import Curriculum from "./components/curriculum/Curriculum"

import AdminDash from "./container/admin/AdminDash"
import AdminCreateCourse from "./container/admin/AdminCreateCourse"
import Members from "./container/admin/Members"
import AdminSetup from "./container/admin/AdminSetup"
import EditCourse from "./components/EditCourse/EditCourse"
import Organization from "./container/welcome/Organization"
import AdminManage from "./container/admin/AdminManage"
import AdminProfile from "./container/admin/AdminProfile"
import UserProfile from "./container/admin/UserProfile"
import Analytics from "./container/admin/Analytics"
import ResetPassword from "./components/ResetPassword/ResetPassword"
import AuthUser from "./components/Auth/AuthUser"
import AuthAdmin from "./components/Auth/AuthAdmin"

const App = () => {
	// const [isAdmin, setIsAdmin] = useState();
	// const [isLoggedIn, setIsLoggedIn] = useState();

	// const resId = localStorage.getItem("userId");
	// 	const resToken = localStorage.getItem("token");
	// 	const checkAdmin = localStorage.getItem("isAdmin");
	// 	const checkLogin = localStorage.getItem("isLoggedIn");

	// const checkLog = () => {

	// 	if (resId == "" || resToken == "" || !resId || !resToken || !isLoggedIn) {
	// 		return // <Navigate to="/" replace />;
	// 	} else {
	// 		let item1 = JSON.parse(resId);
	// 		let item2 = JSON.parse(resToken);
	// 		console.log("localStorage", item1, item2);
	// 		setIsAdmin(checkAdmin);
	// 		setIsLoggedIn(checkLogin);
	// 	}
	// }

	// useEffect(() => {
	// 	checkLog();
	// }, [])

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/org' element={<Organization />} />
					<Route path='/about' element={<About />} />

					<Route path='/dash/' element={<AuthUser><UserDashboard /></AuthUser>} />
					<Route path='/dash/Subscriptions' element={<AuthUser><Subscriptions /></AuthUser>} />
					<Route path='/dash/manage' element={<AuthUser><Manage /></AuthUser>} />
					<Route path='/dash/cc' element={<AuthUser><CreateCourse /></AuthUser>} />
					<Route path='/dash/guidelines' element={<AuthUser><Guidelines /></AuthUser>} />
					<Route path='/dash/curriculum' element={<AuthUser><Curriculum /></AuthUser>} />
					<Route path='/dash/edit' element={<AuthUser><EditCourse /></AuthUser>} />



					<Route path='/admindash' element={<AuthAdmin><AdminDash /></AuthAdmin>} />
					{/* <Route path="/admindash/" element={<Signup />} /> */}
					<Route path='/admindash/cc' element={<AuthAdmin><AdminCreateCourse /></AuthAdmin>} />
					<Route path='/admindash/manage' element={<AuthAdmin><AdminManage /></AuthAdmin>} />
					<Route path='/admindash/members' element={<AuthAdmin><Members /></AuthAdmin>} />
					<Route path='/admindash/members/id' element={<AuthAdmin><UserProfile /></AuthAdmin>} />
					<Route path='/admindash/profile' element={<AuthAdmin><AdminProfile /></AuthAdmin>} />
					<Route path='/admindash/setup' element={<AuthAdmin><AdminSetup /></AuthAdmin>} />
					<Route path='/admindash/analytics' element={<AuthAdmin><Analytics /></AuthAdmin>} />
					<Route path='/admindash/reset' element={<ResetPassword />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

{
	/* {(status.isLogedin && status.type == "itsUser") ? (
		<UserDash />) : (status.isLogedin && status.type == "itsAdmin") ? (
		  <AdminDash />) : (<Welcome />)
	  } */
}

// function App() {
//   return (
//     <>
//       <Typography variant="h3" color="secondary">App</Typography>
//       <Button color="secondary" variant="contained">
//         <Typography variant="button" color="third.main">
//           Primary
//         </Typography>
//       </Button>
//       <Button color="secondary" variant="contained">
//         Secondary
//       </Button>
//       <Button color="third" variant="contained">
//         Third
//       </Button>

//       <div>
//         <Box sx={{ bgcolor: "secondary.main" }}>
//           <Typography variant="h1" color="third.main">
//             h1 Lorem Ipsum is simply dummy text of the industry.
//           </Typography>
//         </Box>
//         <br />
//         <Typography variant="h2">
//           h2 Lorem Ipsum is simply dummy text of the industry.
//         </Typography>
//         <br />
//         <Typography variant="h3">
//           h3 Lorem Ipsum is simply dummy text of the industry.
//         </Typography>
//         <br />
//         <Typography variant="h4">
//           h4 Lorem Ipsum is simply dummy text of the industry.
//         </Typography>
//         <br />
//         <Typography variant="h5">
//           h5 Lorem Ipsum is simply dummy text of the industry.
//         </Typography>
//         <br />
//         <Typography variant="h6">
//           h6 Lorem Ipsum is simply dummy text of the industry.
//         </Typography>
//       </div>
//       <hr></hr>
//       <hr></hr>
//     </>
//   );
// }

export default App
