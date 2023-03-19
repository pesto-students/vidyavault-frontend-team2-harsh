import react, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
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
import AdminCurriculum from "./components/curriculum/AdminCurriculum"
import AdminProfile from "./container/admin/AdminProfile"
import UserProfile from "./container/admin/UserProfile"
import Analytics from "./container/admin/Analytics"
import ResetPassword from "./components/ResetPassword/ResetPassword"

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/org' element={<Organization />} />
					<Route path='/about' element={<About />} />

					<Route path='/dash/' element={<UserDashboard />} />
					<Route path='/dash/Subscriptions' element={<Subscriptions />} />
					<Route path='/dash/manage' element={<Manage />} />
					<Route path='/dash/cc' element={<CreateCourse />} />
					<Route path='/dash/guidelines' element={<Guidelines />} />
					<Route path='/dash/curriculum' element={<Curriculum />} />
					<Route path='/dash/edit' element={<EditCourse />} />

					<Route path='/admindash' element={<AdminDash />} />
					{/* <Route path="/admindash/" element={<Signup />} /> */}
					<Route path='/admindash/cc' element={<AdminCreateCourse />} />
					<Route path='/admindash/manage' element={<AdminManage />} />
					<Route path='/admindash/curriculum' element={<AdminCurriculum />} />
					<Route path='/admindash/members' element={<Members />} />
					<Route path='/admindash/members/id' element={<UserProfile />} />
					<Route path='/admindash/profile' element={<AdminProfile />} />
					<Route path='/admindash/setup' element={<AdminSetup />} />
					<Route path='/admindash/analytics' element={<Analytics />} />
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
