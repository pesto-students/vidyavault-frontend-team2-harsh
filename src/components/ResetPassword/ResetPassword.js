import { Stack, Box, Divider, Button, TextField, FormControlLabel, Switch, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import GoogleIcon from "@mui/icons-material/Google"
import { setLogin } from "../../store/authSlice"
import { BACKEND_URL } from "../../Constant"
import { KeyboardBackspaceIcon } from "../../components/atoms/icons/icons"
import { openSnack, startLoading, stopLoading } from "../../store/systemSlice"
import LoadingButton from "@mui/lab/LoadingButton"
import CustomSnackbar from "../../components/snackbar/Snackbar"
import { SaveIcon } from "../../components/atoms/icons/icons"
import ForgotPass from "../../components/ForgotModal/ForgotPass"
import Navbar from "../navbar/Navbar"
// import { set } from "immer/dist/internal"

const ResetPassword = () => {
	let { token, id } = useParams()
	const [password, setPassword] = useState("")
	const [confpassword, setConfPassword] = useState("")
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState("")
	let navigate = useNavigate()
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		navigate("/admindash")
	// 	}, 2000)
	// }, [])

	let handleBack = () => {
		navigate("/")
	}

	let submit = () => {
		console.log(token, id)
		if (password !== confpassword) {
			setError(true)
			setErrorText("Passwords do not match")
		} else {
			setError(false)
			setErrorText("")
			// axios
			// 	.post(`${BACKEND_URL}/user/resetpassword`, { id, password }, { authorization: `Bearer ${token}` })
			// 	.then((res) => {
			// 		if (res.data.message === "password changed seccessfuly") {
			// 			setPassword("")
			// 			setConfPassword("")
			// 		}
			// 		// if (isAdmin) {
			// 		// 	navigate("/admindash")
			// 		// } else {
			// 		// 	navigate("/dash")
			// 		// }
			// 	})
			// 	.catch((error) => {
			// 		setErrorText(error)
			// 		setError(true)
			// 	})
		}
	}
	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Navbar todisplay={"none"} />
			<Box
				sx={{
					bgcolor: "primary.main",
					width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" },
					height: "fit-content",
					margin: "1rem auto auto",
					padding: "2rem",
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
					<Typography variant='h3'>Reset Password</Typography>

					<TextField
						label='New password'
						color='third'
						error={error}
						fullWidth
						size='large'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<TextField
						label='Confirm password'
						color='third'
						error={error}
						fullWidth
						size='large'
						name='Confirmpass'
						helperText={errorText}
						value={confpassword}
						onChange={(e) => setConfPassword(e.target.value)}
					/>
					<Button color='secondary' size='large' variant='contained' fullWidth onClick={submit}>
						Reset
					</Button>
				</Stack>
			</Box>
		</Box>
	)
}

export default ResetPassword
