import React, { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import logo from "../../components/atoms/assets/darklogo.png"
import { Box } from "@mui/system"
import GoogleIcon from "@mui/icons-material/Google"
import { Divider, Typography } from "@mui/material"
import { addType } from "../../store/authSlice"
import { useDispatch } from "react-redux"
import { BACKEND_URL } from "../../Constant"
import Navbar from "../../components/navbar/Navbar"
import { KeyboardBackspaceIcon } from "../../components/atoms/icons/icons"

const UserInvite = () => {
	const displayNavbar = "none"
	let navigate = useNavigate()

	const { email, orgId } = useParams()

	const [formData, setFormData] = useState({
		name: "",
		password: ""
	})

	let handleBack = () => {
		navigate("/")
	}

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	let submit = async () => {
		// dispatch(addType("itsUser"));
		const body = {
			name: formData.name,
			email: email,
			password: formData.password,
			orgId: orgId
		}
		axios
			.post("https://vidyavault.onrender.com/api/membersignup", body)
			.then((x) => console.log(x))
			.catch((x) => console.log(x))
	}
	return (
		<>
			<Box sx={{ width: "100vw", height: "100vh" }}>
				<Box sx={{ 
					width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" }, 
					height: "fit-content", 
					bgcolor: "secondary.main", 
					padding: "0.6rem", 
					margin: "auto auto",
					borderRadius: 3,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center"
					}}>
					<Box sx={{ width: "110px" }} component={Link} to='/'>
						<img src={logo} height='80px' width='80px' />
						<Typography variant='h6' color='third.main' ml={1}>
							VidyaVault
						</Typography>
					</Box>
					<Box
						sx={{
							bgcolor: "primary.main",
							height: "fit-content",
							borderRadius: 3,
							width: "100%",
							marginTop: "1rem",
							padding: "1rem"
						}}
					>
						<Stack
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={4}
							height='fit-content'
							margin={3}
						>
							<Typography variant='h3'>Sign up</Typography>
							<Typography variant='h6'>Enter your Credentials</Typography>

							<TextField
								label='Name'
								color='third'
								fullWidth
								size='large'
								name='name'
								value={formData.name}
								onChange={(e) => handleChange(e)}
							/>

							<TextField
								color='third'
								label='Password'
								fullWidth
								name='password'
								type='password'
								value={formData.password}
								onChange={(e) => handleChange(e)}
							/>
							<Button color='secondary' size='large' variant='contained' fullWidth onClick={submit}>
								Sign up
							</Button>
						</Stack>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default UserInvite
