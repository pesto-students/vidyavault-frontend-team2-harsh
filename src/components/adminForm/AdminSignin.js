import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

let AdminSignin = () => {
	const nevigate = useNavigate()
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	let handleFormDataChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	let handleDemo = () => {
		nevigate("/admindash")
	}

	let handleSubmit = (e) => {
		console.log(formData)
	}
	return (
		<>
			<Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" } }}>
				<Stack direction='column' justifyContent='center' alignItems='center' spacing={4} height='fit-content' margin={3}>
					<Typography variant='h3'>Admin Sign in</Typography>
					<TextField
						label='Email'
						name='email'
						color='third'
						fullWidth
						size='large'
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.email}
					/>
					<TextField
						label='Password'
						name='password'
						type='password'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.password}
					/>
					<Button variant='contained' fullWidth color='secondary' onClick={handleSubmit}>
						Sign in
					</Button>
					<Button variant='contained' fullWidth color='secondary' onClick={handleDemo}>
						Admin demo sign in
					</Button>
				</Stack>
			</Box>
		</>
	)
}

export default AdminSignin
