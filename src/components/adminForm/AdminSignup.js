import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

let AdminSignup = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		orgName: "",
		goal: "",
		slogan: ""
	})

	let handleFormDataChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	let handleSubmit = (e) => {
		console.log(formData)
	}

	return (
		<>
			<Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" } }}>
				<Stack direction='column' justifyContent='center' alignItems='center' spacing={3} height='100%' margin={2}>
					<Typography variant='h5'>To create your Organization sign up here</Typography>
					<Typography variant='h3'>Admin Sign up</Typography>
					<TextField
						id='outlined-basic'
						label='Name'
						name='name'
						fullWidth
						size='large'
						color='third'
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.name}
					/>
					<TextField
						id='outlined-basic'
						label='Email'
						name='email'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.email}
					/>
					<TextField
						id='outlined-basic'
						label='Password'
						name='password'
						type='password'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.password}
					/>

					<TextField
						id='outlined-basic'
						label='Organization Name'
						name='orgName'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.orgName}
					/>

					<Box>
						<Typography variant='h5'>Description</Typography>
						<TextField
							id='outlined-basic'
							label='Goal'
							name='goal'
							color='third'
							fullWidth
							variant='outlined'
							onChange={(e) => handleFormDataChange(e)}
							value={formData.goal}
						/>
						<TextField
							id='outlined-basic'
							label='slogan'
							name='slogan'
							color='third'
							fullWidth
							variant='outlined'
							onChange={(e) => handleFormDataChange(e)}
							value={formData.slogan}
						/>
					</Box>
				</Stack>
				<Button variant='contained' fullWidth color='secondary' onClick={handleSubmit}>
					Sign up
				</Button>
			</Box>
		</>
	)
}

export default AdminSignup
