import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { KeyboardBackspaceIcon } from "../atoms/icons/icons";

let AdminSignup = () => {
	const navigate = useNavigate();
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

	let handleBack = () => {
		navigate("/")
	}

	return (
		<>
			<Box
				sx={{
					bgcolor: "primary.main",
					width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" },
					height: "fit-content",
					margin: "auto auto",
					borderRadius: 3
				}}
			>
				<Box sx={{ position: "absolute", marginLeft: "1.2rem", marginTop: "0.5rem" }}>
					<KeyboardBackspaceIcon fontSize='large' onClick={handleBack} />
				</Box>
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
					<Button variant='text' component={Link} to='/adminsignin'>
						<Typography variant="h5" color='third.dark' sx={{ textTransform: "none" }}>
							Already have Organization/ Go to admin signin
						</Typography>
					</Button>
				</Stack>
			</Box>
		</>
	)
}

export default AdminSignup
