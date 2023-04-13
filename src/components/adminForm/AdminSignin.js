import { LoadingButton } from "@mui/lab"
import { Box, Button, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material"
import axios from "axios"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../../Constant"
import SaveIcon from "@mui/icons-material/Save"
import { openSnack, startLoading, stopLoading } from "../../store/systemSlice"
import ForgotPass from "../ForgotModal/ForgotPass"
import { KeyboardBackspaceIcon } from "../atoms/icons/icons"
import CustomSnackbar from "../snackbar/Snackbar"

let AdminSignin = () => {
	const [openModal, setOpenModal] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	let status = useSelector((state) => state.auth)
	let sys = useSelector((state) => state.system)
	let loading = sys.isLoading

	let handleBack = () => {
		navigate("/")
	}

	const guestFn = (e) => {
		if (e.target.checked) {
			setFormData((form) => {
				return {
					...form,
					["email"]: "abhi@gmail.com",
					["password"]: "12345678"
				}
			})
		} else {
			setFormData((form) => {
				return {
					...form,
					["email"]: "",
					["password"]: ""
				}
			})
		}
	}

	let handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	let handleSubmit = async (e) => {
		dispatch(startLoading())
		if (formData.email == "" || formData.password == "") {
			dispatch(openSnack({ msg: "Missing credentials", type: "error" }));
			dispatch(stopLoading());
			return
		}
		//   const config = {
		//     headers: { Authorization: `Bearer ${token}` }
		// };
		const body = {
			email: formData.email,
			password: formData.password
		}
		axios
			.post(`${BACKEND_URL}/user/signin`, body)
			.then((response) => {
				let id = response.data.data.id
				let token = response.data.data.token
				localStorage.setItem("userId", JSON.stringify(id))
				localStorage.setItem("token", JSON.stringify(token))
				localStorage.setItem("isAdmin", JSON.stringify(true))
				localStorage.setItem("isLoggedIn", JSON.stringify(true))
				dispatch(stopLoading())
				navigate("/admindash")
			})
			.catch((x) => {
				dispatch(openSnack({ msg: "Sign in Failed, please try again", type: "error" }))
				dispatch(stopLoading());
			})
			dispatch(stopLoading());
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
			<CustomSnackbar />
				<ForgotPass openModal={openModal} setOpenModal={setOpenModal} />
				<Box sx={{ position: "absolute", marginLeft: "1.2rem", marginTop: "0.5rem" }}>
					<KeyboardBackspaceIcon fontSize='large' onClick={handleBack} />
				</Box>
				<Stack
					direction='column'
					justifyContent='center'
					alignItems='center'
					spacing={4}
					height='fit-content'
					margin={3}
				>
					<Typography variant='h3'>Admin Sign in</Typography>
					<TextField
						label='Email'
						name='email'
						color='third'
						fullWidth
						size='large'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.email}
					/>
					<TextField
						label='Password'
						name='password'
						type='password'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.password}
					/>
					<FormControlLabel
						value='start'
						control={<Switch color='third' />}
						label='Guest login'
						labelPlacement='start'
						onChange={(e) => guestFn(e)}
					/>
					{loading ? (
						<LoadingButton
							loading
							loadingPosition='start'
							startIcon={<SaveIcon />}
							variant='outlined'
							color='secondary'
						>
							Signing in
						</LoadingButton>
					) : (
						<Button variant='contained' fullWidth color='secondary' onClick={handleSubmit}>
							Sign in
						</Button>
					)}
					<Button variant='text' component={Link} to='/org'>
						<Typography variant="h5" color='third.dark' sx={{ textTransform: "none" }}>
							setup your organization and register admin   
						</Typography>
					</Button>
				</Stack>
			</Box>
		</>
	)
}

export default AdminSignin
