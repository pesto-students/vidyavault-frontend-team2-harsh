import react, { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { addLogin, addType, addId, addToken } from "./store/authSlice"

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
import MemberSignup from "./container/welcome/MemberSignup"
import { useDispatch } from "react-redux"
import Memberships from "./container/user/Memberships";
import ShowCurriculum from "./components/coursecontent/ShowCurriculum"
import AdminSignup from "./components/adminForm/AdminSignup"
import AdminSignin from "./components/adminForm/AdminSignin"
import SetProfile from "./container/user/SetProfile"
import AdminEditCourse from "./components/EditCourse/AdminEditCourse"

const App = () => {
	let dispatch = useDispatch()

	const item1 = localStorage.getItem("isAdmin")
	const item2 = localStorage.getItem("isLoggedIn")
	const item3 = localStorage.getItem("userId")
	const item4 = localStorage.getItem("token")

	let checkAdmin = JSON.parse(item1)
	let checkLogin = JSON.parse(item2)
	let id = JSON.parse(item3)
	let token = JSON.parse(item4)

	dispatch(addLogin(checkLogin))
	dispatch(addType(checkAdmin))
	dispatch(addId(id))
	dispatch(addToken(token))

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/resetpassword' element={<ResetPassword />} />
					<Route path='/membersignup' element={<MemberSignup />} />
					<Route path='/org' element={<AdminSignup />} />
					<Route path='/adminsignin' element={<AdminSignin />} />
					<Route path='/about' element={<About />} />


					<Route path='/dash/' element={<AuthUser />}>
						<Route path='/dash/' element={<UserDashboard />} />
						<Route path='/dash/Subscriptions' element={<Subscriptions />} />
						<Route path='/dash/manage' element={<Manage />} />
						<Route path='/dash/cc' element={<CreateCourse />} />
						<Route path='/dash/guidelines' element={<Guidelines />} />
						<Route path='/dash/curriculum' element={<Curriculum />} />
						<Route path='/dash/edit' element={<EditCourse />} />
						<Route path='/dash/memberships' element={<Memberships />} />
						<Route path='/dash/profile' element={<SetProfile />} />
						<Route path='/dash/showcurriculum' element={<ShowCurriculum />} />
					</Route>


					<Route path='/admindash/' element={<AuthAdmin />}>
						<Route path='/admindash/' element={<AdminDash />} />
						<Route path='/admindash/cc' element={<AdminCreateCourse />} />
						<Route path='/admindash/ismanage' element={<AdminManage />} />
						<Route path='/admindash/members' element={<Members />} />
						<Route path='/admindash/members/id' element={<UserProfile />} />
						<Route path='/admindash/profile' element={<AdminProfile />} />
						<Route path='/admindash/setup' element={<AdminSetup />} />
						<Route path='/admindash/analytics' element={<Analytics />} />
						<Route path='/admindash/reset' element={<ResetPassword />} />
						<Route path='/admindash/courseedit' element={<AdminEditCourse />} />
					</Route>

				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
