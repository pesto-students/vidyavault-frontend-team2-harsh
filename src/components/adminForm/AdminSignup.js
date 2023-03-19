import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
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

	let submit = async () => {

        // dispatch(addType("itsUser"));

        const body = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
			orgName: formData.orgName,
			goal: formData.goal,
			slogan: formData.slogan
        };
        axios.post(
            'https://vidyavault.onrender.com/api/admin/signup',
            body
        ).then((x) => console.log(x)).catch((x) => console.log(x));
    }

	let handleFormDataChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	return (
		<>
			<Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" } }}>
				<Stack direction='column' justifyContent='center' alignItems='center' spacing={4} height='fit-content' margin={3}>
					<Typography variant='h5'>To create your Organization sign up here</Typography>
					<Typography variant='h3'>Admin Sign up</Typography>
					<TextField
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
						label='Email'
						name='email'
						color='third'
						fullWidth
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
					<Typography variant='h5'>Description</Typography>
					<TextField
						label='Organization Name'
						name='orgName'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.orgName}
					/>
					<TextField
						label='Goal'
						name='goal'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.goal}
					/>
					<TextField
						label='slogan'
						name='slogan'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleFormDataChange(e)}
						value={formData.slogan}
					/>
					<Button variant='contained' fullWidth color='secondary' onClick={submit}>
						Sign up
					</Button>
				</Stack>
			</Box>
		</>
	)
}

export default AdminSignup
