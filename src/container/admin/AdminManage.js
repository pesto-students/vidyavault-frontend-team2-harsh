import { useNavigate } from "react-router-dom"
import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import MediaCard from "../../components/card/Card"
import CardHeader from "@mui/material/CardHeader"
import Card from "@mui/material/Card"
import courses from "../../Mock_Data/course.json"
import { Box, Grid } from "@mui/material"
import { Createbanner } from "../../components/advertise/Ad"
import { useDispatch } from "react-redux"
import { add, addFiles, clearArr } from "../../store/courseSlice"
import courseFiles from "../../Mock_Data/courseFiles.json"
import CustomAppBar from "../../components/header/CustomAppBar"
import Snackbar from "../../components/snackbar/Snackbar"
import AddIcon from "@mui/icons-material/Add"
import IconButton from "@mui/material/IconButton"
import { useState } from "react"

const AdminManage = () => {
	// let [data, setData] = useState([])
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
	let data = courses.entries

	return (
		<BackWrapper menuList={menuList}>
			<CustomAppBar data={data} />
			<Snackbar />
			<Grid container direction='row' justifyContent='center' alignItems='flex-start'>
				{data.length !== (0 || undefined) ? (
					courses.map((item, index) => {
						return (
							<Box sx={{ margin: 2 }} key={index} onClick={() => coursesPage(item)}>
								<MediaCard course={item} btn='Edit' />
							</Box>
						)
					})
				) : (
					<Card direction='column' elevation={10} sx={{ borderRadius: 2 }}>
						<CardHeader
							action={
								<IconButton aria-label='settings'>
									<AddIcon color={"third"} />
								</IconButton>
							}
							title='Add Courses'
						/>
					</Card>
				)}
			</Grid>
			{/* <Createbanner /> */}
		</BackWrapper>
	)
}

export default AdminManage
