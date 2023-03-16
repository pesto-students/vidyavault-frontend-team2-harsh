import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Typography, Button, Card } from "@mui/material"
const SetupForm = () => {
	let currentGoal = "Amazing"
	let currentslogan = "Just do it"
	const [formData, setFormData] = React.useState({
		goal: currentGoal,
		slogan: currentslogan
	})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
	}

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			height='100%'
			width='100%'
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" }
			}}
			noValidate
			autoComplete='off'
		>
			<Card
				raised
				sx={{
					boxShadow: 20,
					bgcolor: "#F2f2f2",
					p: 5,
					border: "2px solid #80d3c9",
					borderRadius: 10,
					color: "#F2f2f2"
				}}
			>
				<Typography color='secondary' variant='h3' alignSelf='center' marginBottom={5}>
					Change setup
				</Typography>

				<TextField color='third' id='outlined' name='goal' label='Goal' value={formData.goal} onChange={handleChange} />
				<TextField
					color='third'
					id='outlined'
					name='slogan'
					label='Slogan'
					value={formData.slogan}
					onChange={handleChange}
				/>

				<Button
					sx={{ mt: 12, width: 150, borderRadius: 12, color: "#20262e" }}
					type='submit'
					variant='contained'
					color='third'
				>
					Save
				</Button>
			</Card>
		</Box>
	)
}

export default SetupForm
