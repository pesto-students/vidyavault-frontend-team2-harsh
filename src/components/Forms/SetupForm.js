import React, { useState } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import CheckIcon from "@mui/icons-material/Check"
import TextField from "@mui/material/TextField"
import { Typography, Button, Card, CardHeader, Stack, CircularProgress } from "@mui/material"
const SetupForm = () => {
	let currentGoal = "Amazing"
	let currentslogan = "Just do it"
	const [bannerFile, setBannerFile] = useState("")
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [uploadFlag, setUploadFlag] = useState(true)
	const [formData, setFormData] = useState({
		goal: currentGoal,
		slogan: currentslogan,
		banner: ""
	})
	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
	}

	const handleBannerFileChange = (event) => {
		setBannerFile(event.target.files[0])
		setUploadFlag(false)
	}

	const handleUploadBanner = async () => {
		setLoading(true)
		const Data = new FormData()
		Data.append("file", bannerFile)
		Data.append("upload_preset", "rdizbhea")
		try {
			const response = await axios.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
			setFormData({ ...formData, banner: response.data.secure_url })
			setSuccess(true)
			setLoading(false)
			setTimeout(() => {
				setSuccess(false)
			}, 1000)
		} catch (error) {
			setLoading(false)
			console.error(error)
		}
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
					title='Setup'
					titleTypographyProps={{ variant: "h2", fontWeight: "900" }}
				/>
				<TextField color='third' fullWidth name='goal' label='Goal' value={formData.goal} onChange={handleChange} />

				<TextField
					color='third'
					fullWidth
					name='slogan'
					label='Slogan'
					value={formData.slogan}
					onChange={handleChange}
				/>
				<label
					style={{
						justifySelf: "start",
						width: "100%",
						fontWeight: "600",
						fontSize: "1rem",
						color: "#20262e",
						marginBottom: "1rem"
					}}
				>
					Change Banner
					<input
						style={{ width: "100%", marginTop: "1rem" }}
						type='file'
						accept='image/*'
						onChange={(e) => handleBannerFileChange(e)}
					/>
					<Button
						disabled={uploadFlag}
						sx={{ width: { xs: 100 }, borderRadius: 1, mt: 3 }}
						variant='contained'
						color='secondary'
						onClick={handleUploadBanner}
					>
						Upload
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
				</label>
				<Button
					sx={{ width: { xs: 150, sm: 200, md: 300 }, borderRadius: 1, mt: 3 }}
					variant='contained'
					color='secondary'
					onClick={handleSubmit}
				>
					Save
				</Button>
			</Card>
		</Stack>
	)
}

export default SetupForm