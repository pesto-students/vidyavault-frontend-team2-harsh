import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import menuList from "../../container/admin/menuList"
import BackWrapper from "../backWrapper/BackWrapper"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
	let navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => {
			navigate("/admindash")
		}, 2000)
	}, [])
	return (
		<BackWrapper menuList={menuList}>
			<Box display='flex' justifyContent='center' alignItems='center'>
				<Typography variant='body2'>An mail has been sent to registered email</Typography>
			</Box>
		</BackWrapper>
	)
}

export default ResetPassword
