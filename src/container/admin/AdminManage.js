import { useNavigate } from "react-router-dom"
import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import MediaCard from "../../components/card/Card"
import CardHeader from "@mui/material/CardHeader"
import Card from "@mui/material/Card"
import { Box, CardContent, Grid, Typography } from "@mui/material"
import { Createbanner } from "../../components/advertise/Ad"
import { useDispatch } from "react-redux"
import { add, addFiles, clearArr } from "../../store/courseSlice"
import courseFiles from "../../Mock_Data/courseFiles.json"
import CustomAppBar from "../../components/header/CustomAppBar"
import Snackbar from "../../components/snackbar/Snackbar"
import AddIcon from "@mui/icons-material/Add"
import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import courses from "../../Mock_Data/course.json"
import { Link } from "react-router-dom"

const AdminManage = () => {
	let [data, setData] = useState([])
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const coursesPage = (item) => {
		dispatch(clearArr())
		dispatch(add(item))
		let files = courseFiles.filter((list) => {
			return list.CourseId == item._id
		})
		let current = files[0].CourseData
		dispatch(addFiles(current))
		navigate("/admindash")
	}

	return (
		<BackWrapper menuList={menuList}>
			<CustomAppBar data={data} />
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
							backgroundColor: "#20262e",
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
