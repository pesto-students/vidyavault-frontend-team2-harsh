import {
	SwipeableDrawer,
	ListItem,
	ListItemText,
	List,
	IconButton,
	InputBase,
	TextField,
	Typography
} from "@mui/material"
import { Box, Stack } from "@mui/system"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../atoms/assets/darklogo.png"
import { Button } from "@mui/material"
import { MenuIcon, SearchIcon } from "../../components/atoms/icons/icons"
import { useSelector } from "react-redux"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

const Navbar = ({ todisplay }) => {
	let getState = useSelector((state) => state.auth)
	let isLogin = getState.isLogin
	let isAdmin = getState.isAdmin

	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const [inputText, setInputText] = useState("")
	let inputHandler = (e) => {
		let lowerCase = e.target.value.toLowerCase()
		setInputText(lowerCase)
	}

	// useEffect(() => {
	//     isLogin = getState.isLogin;
	//     isAdmin = getState.isAdmin;
	//     console.log(isLogin, )
	// }, [getState.isLogin])

	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent={todisplay == "none" ? "start" : "space-between"}
					bgcolor='secondary.main'
					p={1}
					spacing={1}
				>
					<Box sx={{ width: "110px", marginLeft: "5rem" }} component={Link} to='/'>
						<img src={logo} height='80px' width='80px' />
						<Typography variant='h6' color='third.main' ml={1}>
							VidyaVault
						</Typography>
					</Box>
					{/* <List input={inputText} /> */}
					{/* <Box>
                        <InputBase
                            sx={{ ml: 1, flex: 1, color: "primary.main" }}
                            placeholder="Search courses..."
                            onChange={(e) => inputHandler(e)}
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" color='primary'>
                            <SearchIcon />
                        </IconButton>
                    </Box> */}
					<IconButton
						edge='start'
						color='third'
						aria-label='menu'
						sx={{ display: { xs: "block", sm: "block", md: "none" } }}
						id='basic-button'
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup='true'
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>

					<SwipeableDrawer anchor='right' open={open} onClose={handleClose} onOpen={open}>
						<List
							sx={{
								display: "flex",
								flexDirection: "column",
								width: 250,
								height: "100vh",
								backgroundColor: "#3c3d42",
								color: "#9ccd62"
							}}
						>
							<ListItem
								sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }}
								button
								onClick={handleClose}
								component={Link}
								to='/'
							>
								<ListItemText primary='Home' />
							</ListItem>
							<ListItem
								sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }}
								button
								onClick={handleClose}
								component={Link}
								to='/org'
							>
								<ListItemText primary='Organization' />
							</ListItem>
							<ListItem
								sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }}
								button
								onClick={handleClose}
								component={Link}
								to='/about'
							>
								<ListItemText primary='About' />
							</ListItem>
							{isLogin && isAdmin && (
								<ListItem
									sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }}
									button
									onClick={handleClose}
									component={Link}
									to='/admindash'
								>
									<ListItemText primary='Dashboard' />
								</ListItem>
							)}

							{isLogin && !isAdmin && (
								<ListItem
									sx={{ padding: "2rem", boxShadow: "1px 1px 3px #222222" }}
									button
									onClick={handleClose}
									component={Link}
									to='/dash'
								>
									<ListItemText primary='Dashboard' />
								</ListItem>
							)}
							<ListItem
								sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }}
								button
								onClick={handleClose}
								component={Link}
								to='/signup'
							>
								<ListItemText primary='Sign up' />
							</ListItem>
							<ListItem
								sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }}
								button
								onClick={handleClose}
								component={Link}
								to='/signin'
							>
								<ListItemText primary='Sign in' />
							</ListItem>
							<ListItem sx={{ padding: "2rem", boxShadow: "1px 1px 10px #000000" }} button onClick={handleClose}>
								<ListItemText primary='Logout' />
							</ListItem>
						</List>
					</SwipeableDrawer>
					<Box
						sx={{ translate: "-2rem", display: { xs: "none", sm: "none", md: todisplay == "none" ? "none" : "block" } }}
					>
						<Stack direction='row' spacing={2}>
							<Button color='primary' size='large' variant='text' component={Link} to='/'>
								<Typography variant='h6' color='primary.main'>
									Home
								</Typography>
							</Button>

							<Button color='primary' size='large' variant='text' component={Link} to='/org'>
								<Typography variant='h6' color='primary.main'>
									Organization setup
								</Typography>
							</Button>

							<Button color='primary' size='large' variant='text' component={Link} to='/adminsignin'>
								<Typography variant='h6' color='primary.main'>
									Admin signin
								</Typography>
							</Button>

							<Button color='primary' size='large' variant='text' component={Link} to='/about'>
								<Typography variant='h6' color='primary.main'>
									About
								</Typography>
							</Button>

							{isLogin && isAdmin && (
								<Button color='third' variant='contained' size='large' component={Link} to='/admindash'>
									<Typography variant='h6' color='secondary.main'>
										Dashboard
									</Typography>
								</Button>
							)}

							{isLogin && !isAdmin && (
								<Button color='third' variant='contained' size='large' component={Link} to='/dash'>
									<Typography variant='h6' color='secondary.main'>
										Dashboard
									</Typography>
								</Button>
							)}

							<Button color='third' variant='contained' size='large' component={Link} to='/signup'>
								<Typography variant='h6' color='secondary.main'>
									Sign up
								</Typography>
							</Button>

							<Button color='third' variant='contained' size='large' component={Link} to='/signin'>
								<Typography variant='h6' color='secondary.main'>
									Sign in
								</Typography>
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Box>
		</>
	)
}

export default Navbar
