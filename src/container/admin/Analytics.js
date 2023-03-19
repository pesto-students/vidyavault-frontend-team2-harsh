import { Card, CardHeader, Box, CardContent, Stack, Typography } from "@mui/material"
import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import Chart from "../../components/Charts/Chart"
import { data } from "../../Mock_Data/ChartData"

const Analytics = () => {
	return (
		<BackWrapper menuList={menuList} color='primary.main'>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Typography marginBottom='2rem' variant='h2'>
					Analytics 📈
				</Typography>
				<Card sx={{ width: "80vw", borderRadius: 5 }}>
					<CardHeader title='Sales in last 4 months'></CardHeader>
					<Chart data={data} />
					<CardContent>
						<Stack direction='row'>
							{data.map((item) => (
								<Typography variant='h5' marginRight={5}>
									{item.name} : {item.value}
								</Typography>
							))}
						</Stack>
					</CardContent>
				</Card>
			</Box>
		</BackWrapper>
	)
}

export default Analytics
