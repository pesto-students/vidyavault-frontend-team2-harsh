import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import menuList from "../../container/admin/menuList"
import BackWrapper from "../backWrapper/BackWrapper"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
	const [password, setPassword] = useState("")
	let navigate = useNavigate()

	const handleClick = () => {
		let obj = {
			id: "",
			token: "",
			password: password
		}

		navigate("/signin")
	}

	const handleChange = (e) => {
		setPassword(e.target.value)
	}
	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<TextField color='third' name='password' label='password' value={password} onChange={handleChange} />

			<Button variant='contained' color='third' onClick={handleClick}>
				Submit
			</Button>
		</Box>
	)
}

export default ResetPassword
