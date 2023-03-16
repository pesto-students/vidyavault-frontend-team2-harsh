import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField/TextField';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoogleIcon from '@mui/icons-material/Google';
import { setLogin } from '../../store/authSlice';
import Navbar from '../../components/navbar/Navbar';

function Signin() {
	const nevigate = useNavigate()
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	let status = useSelector((state) => state.auth)

	// let submit = () => {
	// 	dispatch(setLogin(true))
	// 	if (status.type == "itsUser") {
	// 		nevigate("/dash/")
	// 	}
	// 	if (status.type == "itsAdmin") {
	// 		nevigate("/admindash/")
	// 	}
	// 	// console.log("submit Button", value);
	// }

	let handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	let HandleDemo = () => {
		nevigate("/dash")
	}

	let handleSubmit = (e) => {
		console.log(formData)
	}

	return (
		<>
			<Navbar />
			<Box
				sx={{
					bgcolor: "primary.main",
					width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" },
					height: "max-content",
					margin: "auto auto",
					borderRadius: 5
				}}
			>
				<Stack direction='column' justifyContent='center' alignItems='center' spacing={3} height='100%' margin={3}>
					<Typography variant='h3'>Sign in</Typography>
					<Typography variant='h6'>Enter your credentials to continue</Typography>
					<Button variant='contained' color='third' fullWidth startIcon={<GoogleIcon />}>
						Sign up with google
					</Button>
					<Divider variant='middle'>OR</Divider>

					<TextField
						color='third'
						fullWidth
						name='email'
						label='Email'
						value={formData.email}
						onChange={(e) => handleChange(e)}
					/>
					<TextField
						color='third'
						type='password'
						fullWidth
						name='password'
						label='Password'
						value={formData.password}
						onChange={(e) => handleChange(e)}
					/>
						<Button
							type='submit'
							size='large'
							fullWidth
							variant='contained'
							color='secondary'
							onClick={handleSubmit}
						>
							Sign in
						</Button>
						<Button
							type='submit'
							size='large'
							fullWidth
							variant='contained'
							color='secondary'
							onClick={HandleDemo}
						>
							User Demo sign in
						</Button>

					<Link to='/signup' style={{ textDecoration: "none" }}>
						<Button variant='text'>
							<Typography color='secondary' sx={{ textTransform: "none" }}>
								Go to registration/Sign up page
							</Typography>
						</Button>
					</Link>
				</Stack>
			</Box>
		</>
	)
}

export default Signin
