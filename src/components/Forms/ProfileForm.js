import React from "react"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import { Stack, Card, CardHeader } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import CreateCourse from "../../container/user/CreateCourse"
import { Link } from "react-router-dom"

const Form = styled("form")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2rem"
})

const FormComponent = () => {
	const [formData, setFormData] = React.useState({
		name: "",
		password: ""
	})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleResetPassword = (event) => {
		console.log("Mail has been sent to registered email")
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
	}

	return (
		<Stack border='third' color='#20262e' bgcolor='#F2F2F2' p={10}>
			{/* <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open='false' autoHideDuration={6000} /> */}
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
				<CardHeader
					sx={{ color: "secondary.main", height: "5rem" }}
					title='Profile'
					titleTypographyProps={{ variant: "h2" }}
				/>
				<Form onSubmit={handleSubmit}>
					<TextField
						color='third'
						id='outlined'
						name='email'
						label='Email'
						value={formData.email}
						onChange={handleChange}
					/>

					<TextField
						color='third'
						id='outlined'
						name='password'
						label='Password'
						value={formData.password}
						onChange={handleChange}
					/>
					<Link to='/admindash/reset'>
						<Button
							sx={{ marginBottom: 2, width: 150, borderRadius: 12 }}
							variant='contained'
							color='primary'
							onClick={handleResetPassword}
						>
							Reset Password
						</Button>
					</Link>

					<Button sx={{ width: 150, borderRadius: 12 }} type='submit' variant='contained' color='third'>
						Save
					</Button>
				</Form>
			</Card>
		</Stack>
	)
}

export default FormComponent
