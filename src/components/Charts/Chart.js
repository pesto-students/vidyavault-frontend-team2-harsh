import { color } from "@mui/system"
import React from "react"
import Chart from "react-apexcharts"

const chartStyle = {
	display: "flex",
	flexBasis: 1,
	flexGrow: 2,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#3c3d42"
}

function AnalyticsChart({ data }) {
	const chartData = {
		options: {
			chart: {
				id: "basic-bar"
			},
			color: {},

			xaxis: {
				categories: data.map((item) => item.name),
				labels: {
					style: {
						colors: "#f6f8e2"
					}
				}
			},
			yaxis: {
				labels: {
					style: {
						colors: "#f6f8e2"
					}
				}
			}
		},
		series: [
			{
				name: "Value",
				data: data.map((item) => item.value)
			}
		]
	}

	return (
		<div style={chartStyle}>
			<Chart options={chartData.options} series={chartData.series} type='bar' color='#3c3d42' />
		</div>
	)
}

export default AnalyticsChart
