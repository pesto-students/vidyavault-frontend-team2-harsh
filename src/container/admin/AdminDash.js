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

const AdminDash = () => {
	let OrgName = "Saurabh School"
	let totalsales = 0
	totalsales = data.reduce((prev, curr) => curr.value + prev, 0)
	let currEarnings = totalsales * 3
	return (
		<BackWrapper menuList={menuList}>
			<CustomAdminAppBar OrgName={OrgName} />
			<Container maxWidth={"lg"}>
				<Grid container spacing={4}>
					{DashboardList.map((item, index) => {
						return (
							<Grid item key={index} xl={4} lg={6} sm={6} xs={12}>
								{item.name == "Current Earnings" && <EarningsCard earnings={currEarnings} item={item} />}
								{item.name == "Setup" && (
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
											<Typography variant='h6' color='secondary'>
												Setup your school, Add Avatar,Slogan,Goal etc..
											</Typography>
										</CardContent>
									</Card>
								)}
								{item.name == "Analytics" && (
									<Card elevation={10} sx={{ backgroundColor: "#20262E", height: 300, borderRadius: 2 }}>
										<CardHeader
											action={
												<Link to={item.path}>
													<IconButton aria-label='settings'>
														<LaunchIcon color='third' />
													</IconButton>
												</Link>
											}
											title={`Total Sales:${totalsales}`}
											sx={{ color: "#F2F2F2" }}
										/>
										<CardContent>
											<AnalyticsChart data={data} />
										</CardContent>
									</Card>
								)}
							</Grid>
						)
					})}
				</Grid>
			</Container>
		</BackWrapper>
	)
}

export default AdminDash
