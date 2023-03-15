import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import React, { useState } from "react"
import Button from "@mui/material/Button"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import { Link } from "react-router-dom"
import axios from "axios"
import { Box } from "@mui/system"
import GoogleIcon from "@mui/icons-material/Google"
import { Divider, Typography } from "@mui/material"
import { addType } from "../../store/authSlice"
import { useDispatch } from "react-redux"

function Signup() {
	const dispatch = useDispatch()
	const [checked, setChecked] = useState(false)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [org, setOrg] = useState("")
	const [disable, setDisable] = useState(true)

	const switchHandler = (event) => {
		setChecked(event.target.checked)
		console.log({ Admin: event.target.checked })
		setDisable(!event.target.checked)
	}
	let submit = async () => {
		let obj = {
			name: name,
			email: email,
			password: password,
			Admin: checked,
			org: org
		}
		if (checked) {
			console.log("Admin")
			console.log(obj)
			dispatch(addType("itsAdmin"))
		} else {
			console.log("User")
			// const result = await axios.post('/api/signup', { name, email, password })
			//     .then((x) => {
			//         console.log(x);
			//     })
			// console.log(result);
			// // console.log(obj);
			dispatch(addType("itsUser"))
		}
	}

	return (
		<>
			<BackWrapper menuList={menuList}>
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
						<Typography variant='h3'>Sign up</Typography>
						<Typography variant='h6'>Enter your credentials to continue</Typography>
						<Button variant='contained' color='third' fullWidth startIcon={<GoogleIcon />}>
							Sign up with google
						</Button>
						<Divider variant='middle'>OR</Divider>
						<TextField
							id='outlined-basic'
							label='Name'
							color='third'
							fullWidth
							size='large'
							variant='outlined'
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<TextField
							id='outlined-basic'
							color='third'
							label='Email'
							fullWidth
							variant='outlined'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<TextField
							id='outlined-basic'
							color='third'
							label='Password'
							type='password'
							fullWidth
							variant='outlined'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<FormControlLabel
							value='Admin'
							control={<Switch color='third' />}
							label='Admin'
							labelPlacement='start'
							onChange={switchHandler}
						/>
						<TextField
							id='outlined-basic'
							label='organization name'
							variant='outlined'
							fullWidth
							disabled={disable}
							onChange={(e) => setOrg(e.target.value)}
							value={org}
						/>
						<Button
							color='secondary'
							size='large'
							variant='contained'
							fullWidth
							onClick={() => {
								submit()
							}}
						>
							Sign up
						</Button>

						<Divider variant='middle' />
						<Link to='/signin' style={{ textDecoration: "none" }}>
							<Button variant='text' sx={{ textTransform: "none" }}>
								<Typography color='secondary'>Already have an account?</Typography>
							</Button>
						</Link>
					</Stack>
				</Box>
			</BackWrapper>
		</>
	)
}

export default Signup
