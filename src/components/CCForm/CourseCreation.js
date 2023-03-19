import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"

const CourseCreation = (props) => {
	const formData = props.formData;
	const setFormData = props.setFormData;

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	return (
		<>
			<Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" }, margin: "auto auto", borderRadius: "1rem" }}>
				<Stack direction='column' justifyContent='center' alignItems='center' spacing={3} height='100%' margin={3}>
					<Typography variant='h3'sx={{contentEditable:"true"}}>Course Details</Typography>
					<TextField
						label="Course name"
						name="courseName"
						fullWidth
						size='large'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.courseName}
						color='third'
					/>
					<TextField
						label='Description'
						fullWidth
						name="description"
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.description}
						color='third'
					/>
					<TextField
						label='Amount'
						fullWidth
						name="amount"
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.amount}
						color='third'
					/>
				</Stack>
			</Box>
		</>
	)
}

export default CourseCreation;