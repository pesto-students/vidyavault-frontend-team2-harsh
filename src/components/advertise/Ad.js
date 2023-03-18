import React from "react"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Button } from "@mui/material"
import img1 from "../atoms/assets/img1.svg"
import img2 from "../atoms/assets/img2.svg"
import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

export const JoinBanner = () => {
	return (
		<Box sx={{ bgcolor: "third.main" }}>
			<Stack direction='row' alignItems='center' justifyContent='center'>
				<img src={img1} height='250px' width='250px' />
				<Box>
					<Typography variant='h3'>
						Share what you know.<br></br>Sign up today.
					</Typography>
					<Button variant='contained' color='secondary' sx={{ marginTop: 1 }} component={Link} to="/signup">
						<Typography variant='h6'>Join right now</Typography>
					</Button>
				</Box>
			</Stack>
		</Box>
	)
}

export const Createbanner = () => {
	return (
		<Box sx={{ bgcolor: "third.main", textAlign: "center" }}>
			<Typography variant='h2'>Teaching is the greatest act of optimism.</Typography>
			<Button variant='contained' color='secondary' sx={{ margin: 2 }}>
				<Typography variant='h6' p={1}>
					Create course
				</Typography>
			</Button>
		</Box>
	)
}

export const Createbanner2 = () => {
	return (
		<Box sx={{ bgcolor: "third.main", textAlign: "center" }}>
			<Typography variant='h2'>
				If you are planning for a year, sow rice; if you are planning for a decade, plant trees;<br></br>
				if you are planning for a lifetime, educate people.
			</Typography>
			<Button variant='contained' color='secondary' sx={{ margin: 2 }}>
				<Typography variant='h6' p={1}>
					Join for free
				</Typography>
			</Button>
		</Box>
	)
}

export const WhiteLabelBanner = ({ img }) => {
	return (
		<Box
			sx={{
				objectFit: "fill",
				bgcolor: "secondary.main",
				width: "100vw",
				height: "4rem",
				textAlign: "center"
			}}
		>
			<img style={{ width: "100%", height: "100%" }} src={img1} />
		</Box>
	)
}
