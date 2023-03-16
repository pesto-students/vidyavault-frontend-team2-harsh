import React, { useState, useEffect } from "react"
import menuList from "./menuList"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import axios from "axios"
import {
	Avatar,
	Card,
	Box,
	Grid,
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

	axios.get("/api", {})

	return (
		<BackWrapper menuList={menuList}>
			<Grid paddingLeft={10} item>
				<Typography sx={{ mt: 4, mb: 2 }} variant='h3' component='div'>
					Members
				</Typography>
				<Box>
					<List item dense={true}>
						{MockMembers.map((item, index) => (
							<Link style={{ textDecoration: "none", color: "#20262e" }} to='/admindash/members/id'>
								<ListItem
									sx={{
										backgroundColor: "secondary",
										"&:hover": {
											backgroundColor: "white"
										}
									}}
								>
									<ListItemAvatar>
										<Avatar src={Avatar}></Avatar>
									</ListItemAvatar>
									<ListItemText primary={item.name} />
								</ListItem>
							</Link>
						))}
					</List>
				</Box>
			</Grid>
		</BackWrapper>
	)
}

export default Members
