import { useNavigate, Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../../Constant"
import { useDispatch, useSelector } from "react-redux"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import MediaCard from "../../components/card/Card"
import CardHeader from "@mui/material/CardHeader"
import Card from "@mui/material/Card"
import { Box, CardContent, Grid, Typography } from "@mui/material"
import { Createbanner } from "../../components/advertise/Ad"
import { add, addFiles, clearArr } from "../../store/courseSlice"
// import courseFiles from "../../Mock_Data/courseFiles.json"
import CustomAppBar from "../../components/header/CustomAppBar"
import Snackbar from "../../components/snackbar/Snackbar"
import AddIcon from "@mui/icons-material/Add"
import IconButton from "@mui/material/IconButton"
// import courses from "../../Mock_Data/course.json"
import { SearchFn } from "../../components/Search/Search"
import { getData, postData } from "../../components/DataFetch/DataFetch"
import { startLoading, stopLoading } from "../../store/systemSlice"

const AdminManage = () => {
	// let [data, setData] = useState([])
	// let [showdata, setShowData] = useState([])
	let [query, setQuery] = useState("")
	const [courses, setCourses] = useState([])
	let auth = useSelector((state) => state.auth)
	let sys = useSelector((state) => state.system)
	let loading = sys.isLoading
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const coursesPage = async (item) => {
		{
			dispatch(add(item))
			let header = {
				headers: { authorization: `Bearer ${auth.token}` }
			}

			let res = postData("course", { courseId: item._id }, header)
			res.then((response) => {
				dispatch(addFiles(response.data.data.modules))
			})
			navigate("/edit")
		}
	}

	useEffect(() => {
		dispatch(startLoading())
		let header = {
			headers: { authorization: `Bearer ${auth.token}` }
		}
		let res = getData("user", header)
		res.then((x) => {
			setCourses(x.data.data.ownCourses)
			dispatch(stopLoading())
		})
	}, [])

	// useEffect(() => {
	// 	if (query !== "") {
	// 		let searchedData = SearchFn(data, query)
	// 		setShowData(searchedData)
	// 	} else {
	// 		setData(courses)
	// 	}
	// 	console.log("1")
	// }, [query])

	return (
		<BackWrapper menuList={menuList}>
			<CustomAppBar query={query} setQuery={setQuery} />
			<Snackbar />
			<Grid container direction='row' justifyContent='center' alignItems='flex-start'>
				{courses.length !== 0 ? (
					courses.map((course, index) => {
						return (
							<Box sx={{ margin: 2 }} key={index} onClick={() => coursesPage(course)}>
								<MediaCard course={course} btn='Edit' />
							</Box>
						)
					})
				) : (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#3c3d42",
							height: "100vh",
							width: "100vw"
						}}
					>
						<Card elevation={10} sx={{ display: "flex", width: "70%", borderRadius: 2 }}>
							<CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<IconButton aria-label='Add course' component={Link} to='/admindash/cc'>
									<AddIcon color={"third"} />
								</IconButton>
								<Typography sx={{ opacity: 0.5 }} color='secondary.light' variant='body1'>
									Click the button to add course
								</Typography>
							</CardContent>
						</Card>
					</Box>
				)}
			</Grid>
			{/* <Createbanner /> */}
		</BackWrapper>
	)
}

export default AdminManage
