import React, { useState, useEffect } from "react"
import menuList from "./menuList"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import axios from "axios"
import {
	Avatar,
	Button,
	Card,
	Box,
	Grid,
	CardContent,
	Container,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Typography
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Link } from "react-router-dom"
import MockMembers from "../../Mock_Data/Mockmembers.json"
import { green } from "@mui/material/colors"

const Members = () => {
	const [memberDetails, setMemberDetails] = useState({
		name: "",
		Avatar: ""
	})

	// axios.get("/api", {})

	return (
		<BackWrapper menuList={menuList}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid sx={{ padding: "2rem" }} container spacing={2}>
					{MockMembers.map((member, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Card sx={{ height: "100%", bgcolor: "primary.dark", boxShadow: "0px 3px 10px #80d3c9" }}>
								<CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
									<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
										<Avatar
											alt={member.name}
											src='https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
											sx={{ width: 80, height: 80, mb: 1 }}
										/>
										<Typography gutterBottom variant='h5' component='div'>
											{member.name}
										</Typography>
									</Box>

									<Button
										color='secondary'
										variant='contained'
										component={Link}
										// to={`/members/${member.id}`}
										to='id'
										sx={{ mt: 2, borderRadius: 5 }}
									>
										View Profile
									</Button>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</BackWrapper>
	)
}

export default Members
