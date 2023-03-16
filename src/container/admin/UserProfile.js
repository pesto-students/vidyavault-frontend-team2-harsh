import { Avatar, Container, Stack, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"

const UserProfile = () => {
	let name = "Krishna"
	return (
		<BackWrapper menuList={menuList}>
			<Stack p={10} direction='column' width='50vw' gap={4}>
				<Stack>
					<Avatar m={2} src={Avatar}></Avatar>
					<Typography variant='h5'>{name}</Typography>
				</Stack>
				<Typography variant='body1'>Member since 2019 {}</Typography>
			</Stack>
		</BackWrapper>
	)
}

export default UserProfile
