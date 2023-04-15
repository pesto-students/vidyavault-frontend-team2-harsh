import React from "react"
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"

const UserProfile = () => {
	const { id } = useParams()

	//axios req needed

	const name = "Saurabh"
	const avatar = "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
	const email = "madarauchiha@tsukinome.com"
	return (
		<BackWrapper menuList={menuList}>
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<Card sx={{ width: 300, mt: 3 }}>
					<CardContent>
						<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<Avatar alt={name} src={avatar} sx={{ width: 96, height: 96, mb: 2 }} />
							<Typography variant='h5' component='div' gutterBottom>
								{name}
							</Typography>
							<Typography variant='body1' gutterBottom>
								Email: {email}
							</Typography>
						</Box>
					</CardContent>
				</Card>

				<Typography variant='body1' gutterBottom>
					Courses currently enrolled: JS Course by Saurabh,Physics course by Kirti
				</Typography>
			</Box>
		</BackWrapper>
	)
}

export default UserProfile
