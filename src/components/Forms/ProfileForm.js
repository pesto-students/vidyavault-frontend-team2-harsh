import React from "react"
import axios from "axios"
import CheckIcon from "@mui/icons-material/Check"
import { TextField, Box, Button, Stack, Card, CardHeader, CircularProgress, CardContent, Avatar } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import CreateCourse from "../../container/user/CreateCourse"
import { Link } from "react-router-dom"

const FormComponent = () => {
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
		if (avatarFile) {
			setLoading(true)
			const Data = new FormData()
			Data.append("file", avatarFile)
			Data.append("upload_preset", "rdizbhea")

			axios
				.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
				.then((response) => {
					setFormData({ ...formData, avatar: response.data.secure_url })
					console.log(formData.avatar)
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
		event.preventDefault()
		console.log(formData)
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
			bgcolor='#F2F2F2'
		>
			{/* <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open='false' autoHideDuration={6000} /> */}
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					bgcolor: "primary.light",
					width: "60%",
					height: "90vh",
					p: 5,
					borderRadius: 2,
					color: "#F2f2f2"
				}}
			>
				<CardHeader
					sx={{ color: "secondary.main", height: "5rem" }}
					title='Profile'
					titleTypographyProps={{ variant: "h2", fontWeight: "900" }}
				/>

				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
					<Avatar
						alt='avatar'
						src='https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
						sx={{ width: 96, height: 96 }}
					/>
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
				<TextField color='third' fullWidth name='name' label='Name' value={formData.name} onChange={handleChange} />

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
					disabled={formData.password !== confPass || formData.password === ""}
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