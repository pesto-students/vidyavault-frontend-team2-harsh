import React, { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
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
			{" "}
			<Box sx={{ width: "100%", height: "100%" }}>
				<Navbar todisplay={displayNavbar} />
				<Box
					sx={{
						bgcolor: "primary.main",
						width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" },
						height: "fit-content",
						margin: "auto auto",
						borderRadius: 3
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
		</>
	)
}

export default UserInvite
