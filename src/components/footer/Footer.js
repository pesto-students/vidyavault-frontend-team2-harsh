import React from "react"
import { styled } from "@mui/system"
import { Typography, TextField, Button, Box, Stack } from "@mui/material"
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material"
import { Link } from "react-router-dom"

const FooterContainer = styled("footer")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexDirection: "row",
	flexWrap: "wrap",
	padding: "5rem",
	color: "#F2F2F2",
	backgroundColor: "#20262e"
})

const BrandContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"& > *": {
		marginRight: "0.5rem"
	}
})

const LinksContainer = styled("div")({
	display: "flex",
	alignItems: "start",
	flexDirection: "column",
	justifyContent: "center",
	marginBottom: "1rem",
	"& > *": {
		margin: "0.5rem"
	}
})

const Footer = () => {
	return (
		<FooterContainer>
			<Stack direction='column' gap='2rem'>
				<Typography variant='h3' component='h2'>
					<BrandContainer>
						<Box component='span' fontWeight='fontWeightBold'>
							VidyaVault
						</Box>
						<Typography variant='subtitle1' color='primary.main' alignSelf='end'>
							&copy; 2023
						</Typography>
					</BrandContainer>
				</Typography>
				<LinksContainer
					onMouseOver={(e) => (e.target.style.color = "#80d3c9")}
					onMouseOut={(e) => {
						e.target.style.color = "#F2F2F2"
					}}
				>
					<Link
						style={{
							textDecoration: "none",
							color: "#F2F2F2"
						}}
						to='/'
					>
						About Us
					</Link>
					<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
						Contact Us
					</Link>
					<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
						Careers
					</Link>
					<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
						Privacy Policy
					</Link>
					<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
						Terms
					</Link>
					<Stack direction='row' gap='2rem'>
						<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
							<Facebook />
						</Link>
						<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
							<Twitter />
						</Link>
						<Link style={{ textDecoration: "none", color: "#F2F2F2" }} to='/'>
							<LinkedIn />
						</Link>
					</Stack>
				</LinksContainer>
			</Stack>
			<Stack direction='row' gap='2rem' flexWrap="wrap">
				<TextField
					sx={{ width: {xs: "14rem", sm: "18rem"} }}
					id='email-input'
					size='small'
					label='Enter your email'
					variant='outlined'
					color='third'
					InputLabelProps={{
						style: { color: "#F2F2F2", borderColor: "#F2F2F2" }
					}}
				/>
				<Button variant='contained' color='third'>
					Let us know!
				</Button>
			</Stack>
		</FooterContainer>
	)
}

export default Footer;