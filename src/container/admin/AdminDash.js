import React from "react"
import { Box, Button, Container, Grid, Card, CardHeader, Typography, CardContent } from "@mui/material"
import LaunchIcon from "@mui/icons-material/Launch"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import DashboardList from "./DashboardList"
import menuList from "./menuList"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import { Link } from "react-router-dom"
import CustomAdminAppBar from "../../components/header/CustomAdminAppBar"
import { data } from "../../Mock_Data/ChartData"
import AnalyticsChart from "../../components/Charts/Chart"
import EarningsCard from "../../components/card/EarningsCard"
import { WhiteLabelBanner } from "../../components/advertise/Ad"
import Quotes from "../../Mock_Data/Quotes"

const AdminDash = () => {
	let OrgName = "Saurabh School"
	let totalsales = 0
	let members = 10
	totalsales = data.reduce((prev, curr) => curr.value + prev, 0)
	return (
		<BackWrapper menuList={menuList}>
			<CustomAdminAppBar OrgName={OrgName} />
			<Box
				sx={{ padding: "2rem", backgroundColor: "#80d3c9", width: "100%", height: "fit-content", marginBottom: "2rem" }}
			>
				<Typography sx={{ opacity: 0.6, textAlign: "center" }} variant='h4'>
					{Quotes[Math.floor(Math.random() * 9)]}
				</Typography>
			</Box>
			<Container maxWidth={"lg"}>
				<Grid container spacing={{ xs: 2 }}>
					{DashboardList.map((item, index) => (
						<>
							{item.name == "Setup" && (
								<Grid item key={index} xs={6}>
									<Card elevation={2} sx={{ borderRadius: 5, border: "2px solid #80d3c9" }}>
										<CardHeader
											action={
												<Link to={item.path}>
													<IconButton aria-label='settings'>
														<LaunchIcon color='third' />
													</IconButton>
												</Link>
											}
											titleTypographyProps={{ variant: "h4" }}
											title={item.name}
											sx={{ color: "#20262E" }}
										/>
										<CardContent>
											<Typography variant='body1' color='secondary'>
												Setup your school, Add Avatar,Slogan,Goal etc..
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							)}

							{item.name == "Members" && (
								<Grid item key={index} xs={6}>
									<Card elevation={2} sx={{ borderRadius: 5, border: "2px solid #80d3c9" }}>
										<CardHeader
											action={
												<Link to={item.path}>
													<IconButton aria-label='settings'>
														<LaunchIcon color='third' />
													</IconButton>
												</Link>
											}
											titleTypographyProps={{ variant: "h4" }}
											title={`Members:${members}`}
											sx={{ color: "#20262E" }}
										/>
										<CardContent>
											<Typography variant='body1' color='secondary'>
												Total Members Currently learning your courses
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							)}

							{item.name == "Analytics" && (
								<Grid item key={index} xl={12} lg={12} sm={12} xs={12}>
									<Card
										elevation={2}
										sx={{
											width: "100%",
											backgroundColor: "#20262E",
											height: 300,
											borderRadius: 5,
											border: "2px solid #80d3c9"
										}}
									>
										<CardHeader
											action={
												<Link to={item.path}>
													<IconButton aria-label='settings'>
														<LaunchIcon color='third' />
													</IconButton>
												</Link>
											}
											titleTypographyProps={{ variant: "h4" }}
											title={`Total Sales:${totalsales}`}
											sx={{ color: "#F2F2F2" }}
										/>
										<CardContent>
											<AnalyticsChart data={data} />
										</CardContent>
									</Card>
								</Grid>
							)}
						</>
					))}
				</Grid>
			</Container>
		</BackWrapper>
	)
}

export default AdminDash
