import { Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../atoms/assets/darklogo.png"
import { Button, IconButton } from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box sx={{ top: 0, width: "100%" }}>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				bgcolor='secondary.main'
				p={2}
				spacing={2}
			>
				<Box sx={{ width: "110px", marginLeft: 3 }}>
					<img src={logo} height='80px' width='80px' />
					<Typography variant='h6' color='third.main' ml={1}>
						VidyaVault
					</Typography>
				</Box>

				<Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: "1rem" }}>
					<Button color='primary' size='large' variant='text' component={Link} to='/'>
						<Typography variant='h6' color='primary.main'>
							Home
						</Typography>
					</Button>

					<Button color='primary' size='large' variant='text' component={Link} to='/org'>
						<Typography variant='h6' color='primary.main'>
							Organization
						</Typography>
					</Button>

					<Button color='primary' size='large' variant='text' component={Link} to='/about'>
						<Typography variant='h6' color='primary.main'>
							About
						</Typography>
					</Button>

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
				</Box>

				<Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
					<IconButton edge='start' color='third' aria-label='menu' onClick={handleMenu}>
						<MenuIcon />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>
							<Link to='/' style={{ textDecoration: "none", color: "#000" }}>
								Home
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/org' style={{ textDecoration: "none", color: "#000" }}>
								Organization
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/about' style={{ textDecoration: "none", color: "#000" }}>
								About
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/signup' style={{ textDecoration: "none", color: "#000" }}>
								SignUp
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/signin' style={{ textDecoration: "none", color: "#000" }}>
								SignIn
							</Link>
						</MenuItem>
					</Menu>
				</Box>
			</Stack>
		</Box>
	)
}

export default Navbar
