import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import { Divider, FormControlLabel, Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoogleIcon from '@mui/icons-material/Google';
import { setLogin } from '../../store/authSlice';
import { BACKEND_URL } from '../../Constant';
import { KeyboardBackspaceIcon } from '../../components/atoms/icons/icons';
import { openSnack, startLoading, stopLoading } from '../../store/systemSlice';
import LoadingButton from '@mui/lab/LoadingButton';
import CustomSnackbar from "../../components/snackbar/Snackbar"
import { SaveIcon } from '../../components/atoms/icons/icons';

function Signin() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	let status = useSelector((state) => state.auth);
	let sys = useSelector((state) => state.system);
	let loading = sys.isLoading;

	// let submit = () => {
	// 	dispatch(setLogin(true))
	// 	if (status.type == "itsUser") {
	// 		navigate("/dash/")
	// 	}
	// 	if (status.type == "itsAdmin") {
	// 		navigate("/admindash/")
	// 	}
	// 	// console.log("submit Button", value);
	// }

	let handleBack = () => {
		navigate("/");
	}

	const guestFn = (e) => {
		if (e.target.checked) {
			setFormData((form) => {
				return {
					...form,
					["email"]: "saurabh@gmail.com",
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

		if(formData.email == "" || formData.password == "") {
			dispatch(openSnack({ msg: "Missing credentials", type: "error" }));
			return;
		}

		dispatch(startLoading());
		const body = {
			email: formData.email,
			password: formData.password
		};
		axios.post(
			`${BACKEND_URL}/user/signin`,
			body
		)
			.then((response) => {
				let id = response.data.data.id;
				let token = response.data.data.token;
				localStorage.setItem("userId", JSON.stringify(id));
				localStorage.setItem("token", JSON.stringify(token));
				localStorage.setItem("isAdmin", JSON.stringify(false));
				localStorage.setItem("isLoggedIn", JSON.stringify(true));

				dispatch(stopLoading());
				navigate("/dash")

			})
			.catch((x) => {
				dispatch(openSnack({ msg: "Sign in Failed, please try again", type: "error" }));
				dispatch(stopLoading());
			});
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
					<KeyboardBackspaceIcon fontSize="large" onClick={handleBack} />
				</Box>
				<Stack direction='column' justifyContent='center' alignItems='center' spacing={4} height='fit-content' margin={3}>
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

					<FormControlLabel
						value="start"
						control={<Switch color="third" />}
						label="Guest login"
						labelPlacement="start"
						onChange={(e) => guestFn(e)}
					/>

					{loading ? (
						<LoadingButton
							loading
							loadingPosition="start"
							startIcon={<SaveIcon />}
							variant="outlined"
							color="secondary"
						>
							Signing in
						</LoadingButton>
					) : (
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
					)}
					<CustomSnackbar />
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
