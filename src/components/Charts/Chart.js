import { color } from "@mui/system"
import React from "react"
import Chart from "react-apexcharts"

const chartStyle = {
	display: "flex",
	flexBasis: 1,
	flexGrow: 2,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#20262e"
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
						colors: "#F2F2F2"
					}
				}
			},
			yaxis: {
				labels: {
					style: {
						colors: "#F2F2F2"
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
			<Chart
				options={chartData.options}
				series={chartData.series}
				type='bar'
				color='#20262E'
			/>
		</div>
	)
}

export default AnalyticsChart
