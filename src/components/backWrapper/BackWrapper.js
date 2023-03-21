import * as React from "react"
import { Drawer, ListItemButton, Stack, styled, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Button } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { MenuIcon } from "../atoms/icons/icons"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "./assets/darkerlogo.png"
// import Link from "@mui/material/Link"
const drawerWidth = 230

const BackWrapper = (props) => {
	let navigate = useNavigate();
	let color = props.color
	let menuList = props.menuList
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const [selectedItem, setSelectedItem] = React.useState("")

	const handleDrawerToggle = (e) => {
		console.log("first")
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<>
			<Stack alignItems='center' m={2}>
				<img src={Logo} alt='VidyaVault' height={80} width={80} onClick={() => navigate("/")}/>
				<Typography variant='h6' color='third.main' onClick={() => navigate("/")}>
					VidyaVault
				</Typography>
			</Stack>
			<Stack spacing={1} alignItems='flex-start' justifyContent='flex-start' ml={4} mt={2}>
				{menuList.map((item, index) => {
					return (
						<NavLink
							to={item.path}
							key={index}
							style={({ isActive }) => {
								return {
									color: isActive ? "#80d3c9" : "#F2F2F2",
									textDecoration: "none"
								}
							}}
							end
						>
							<Button startIcon={item.icon} size='large' variant='text'>
								{item.name}
							</Button>
						</NavLink>
					)
				})}
				<Typography variant='h6' sx={{ position: "absolute", bottom: "1rem" }} color='third.main'>
					Copyright © 2023 VidyaVault, <br></br>Inc. All rights reserved.
				</Typography>
			</Stack>
		</>
	)

	return (
		<>
			<IconButton
				aria-label='open drawer'
				onClick={(e) => handleDrawerToggle(e)}
				sx={{ mr: 2, display: { md: "none", sm: "block" }, marginRight: "auto", position: "absolute", zIndex: 5 }}
			>
				<MenuIcon color='primary' />
			</IconButton>

			<Box sx={{ display: "flex", bgcolor: "secondary.main", height: "100vh" }}>
				<Box component='nav' sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}>
					<Drawer
						anchor='left'
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true
						}}
						PaperProps={{
							sx: {
								backgroundColor: "secondary.main",
								color: "primary.main"
							}
						}}
						sx={{
							display: { xs: "block", sm: "block", md: "none" },
							"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
						}}
					>
						{drawer}
					</Drawer>

					<Drawer
						anchor='left'
						variant='permanent'
						PaperProps={{
							sx: {
								backgroundColor: "secondary.main",
								color: "primary.main"
							}
						}}
						sx={{
							display: { xs: "none", sm: "none", md: "block" },
							"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
						}}
						open
					>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component='main'
					sx={{
						borderRadius: 5,
						width: "100%",
						height: "100vh",
						borderTopLeftRadius: 120,
						overflowY: "auto",
						bgcolor: "primary.main",
						margin: 0,
						padding: 0,
						overflowY: "auto"
					}}
				>
					{props.children}
				</Box>
			</Box>
		</>
	)
}

export default BackWrapper
