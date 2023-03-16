import React from "react"
import { Link } from "react-router-dom"
import { IconButton } from "@mui/material"
import LaunchIcon from "@mui/icons-material/Launch"
import { Card, CardContent, CardHeader, Typography } from "@mui/material"

const EarningsCard = ({ earnings, item }) => {
	return (
		<Card elevation={10} sx={{ borderRadius: 5 }}>
			<CardHeader
				action={
					<Link to={item.path}>
						<IconButton aria-label='settings'>
							<LaunchIcon color='third' />
						</IconButton>
					</Link>
				}
				title={item.name}
				sx={{ color: "#20262E" }}
			/>
			<CardContent>
				<Typography variant='h5' component='h2'>
					{`$${earnings.toFixed(2)}`}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default EarningsCard
