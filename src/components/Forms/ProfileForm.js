import React, { useState } from "react"
import axios from "axios"
import CheckIcon from "@mui/icons-material/Check"
import { TextField, Box, Button, Stack, Card, CardHeader, CircularProgress, CardContent, Avatar } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import CreateCourse from "../../container/user/CreateCourse"
import { patchData } from "../DataFetch/DataFetch"
import { useDispatch, useSelector } from "react-redux"
import { openSnack, closeSnack, startLoading, stopLoading } from "../../store/systemSlice"
import { Link, useNavigate } from "react-router-dom"
import CustomSnackbar from "../snackbar/Snackbar"
import { getUser } from "../../container/user/redux/userData"
import { BACKEND_URL } from "../../Constant"

const FormComponent = () => {
	let [UserData, setUserData] = React.useState()
	let dispatch = useDispatch()
	let navigate = useNavigate()
	let sys = useSelector((state) => state.system)
	// let loading = sys.isLoading
	let auth = useSelector((state) => state.auth)

	const [avatarFile, setAvatarFile] = React.useState("")
	const [success, setSuccess] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	const [formData, setFormData] = React.useState({
		name: "",
		password: "",
		avatar: ""
	})
	const [confPass, setConfPass] = React.useState("")

	React.useEffect(() => {
		dispatch(startLoading())
		let res = getUser(`${BACKEND_URL}/user`, auth.token)
		res.then((x) => {
			console.log(x.data.data)
			setUserData(x.data.data)
		})
		dispatch(stopLoading())

		if (avatarFile) {
			setLoading(true)
			const Data = new FormData()
			Data.append("file", avatarFile)
			Data.append("upload_preset", "rdizbhea")

			axios
				.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
				.then((response) => {
					setFormData({ ...formData, avatar: response.data.secure_url })
					setSuccess(true)
					setLoading(false)
					setTimeout(() => {
						setSuccess(false)
					}, 1000)
				})
				.catch((error) => {
					setLoading(false)
					console.error(error)
				})
		}
	}, [avatarFile])

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleSubmit = async (event) => {
		if (formData.name == "" && formData.password == "" && formData.avatar == "") {
			dispatch(openSnack({ msg: "Fill at least one input, Missing cridentials", type: "error" }))
			return
		}
		event.preventDefault()
		let header = { headers: { authorization: `Bearer ${auth.token}` } }
		const result = patchData(`/user`, formData, header)
		result.then((x) => {
			dispatch(openSnack({ msg: "congratulations! Updated Succesfully", type: "success" }))
			navigate("/dash/profile")
		})
		result.catch((x) => {
			dispatch(openSnack({ msg: "Failed to update", type: "error" }))
		})
	}

	const handleAvatarChange = (event) => {
		setAvatarFile(event.target.files[0])
	}

	return (
		<Stack
			sx={{ width: "100%", height: "100%" }}
			direction='column'
			justifyContent='center'
			alignItems='center'
			bgcolor='#f6f8e2'
		>
			<CustomSnackbar />
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					bgcolor: "primary.light",
					width: { xs: "90%", sm: "60%" },
					height: "90vh",
					p: 5,
					borderRadius: 2,
					color: "#f6f8e2"
				}}
			>
				<CardHeader
					sx={{ color: "secondary.main", height: "5rem" }}
					title='Profile'
					titleTypographyProps={{ variant: "h2", fontWeight: "900" }}
				/>

				<Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", flexGrow: 1 }}>
					<Avatar alt='avatar' src={UserData && UserData.avatar} sx={{ width: 96, height: 96 }} />
					<Button
						variant='outlined'
						color='secondary'
						onClick={(e) => {
							e.target.firstChild.click()
						}}
					>
						<input
							style={{ width: "100%" }}
							type='file'
							accept='image/*'
							hidden
							onChange={(e) => handleAvatarChange(e)}
						/>
						Upload/Change Avatar
					</Button>
					{success ? (
						<CheckIcon color='success' />
					) : (
						loading && (
							<Box sx={{ mb: "1rem", display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
								<CircularProgress size={20} thickness={4} color='secondary' />
							</Box>
						)
					)}
				</Box>
				<TextField
					color='third'
					fullWidth
					name='name'
					label={UserData && UserData.name}
					value={formData.name}
					onChange={handleChange}
				/>

				<TextField
					color='third'
					fullWidth
					name='password'
					label='Password'
					value={formData.password}
					onChange={handleChange}
				/>

				<TextField
					color='third'
					fullWidth
					name='confirm_password'
					label='Confirm-Password'
					type='password'
					value={confPass}
					onChange={(e) => setConfPass(e.target.value)}
				/>

				<Button
					sx={{ width: { xs: 150, sm: 200, md: 300 }, borderRadius: 1, mt: 3 }}
					variant='contained'
					disabled={formData.password !== confPass && formData.name == ""}
					color='secondary'
					onClick={handleSubmit}
				>
					Save
				</Button>
			</Card>
		</Stack>
	)
}

export default FormComponent
