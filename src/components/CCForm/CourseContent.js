import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"

const CourseContent = (props) => {
	const formData = props.formData
	const setFormData = props.setFormData

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
					<Typography variant='h3'>Course structure</Typography>
					<TextField
						label='Module-Name(Optional)'
						name='moduleName'
						fullWidth
						size='large'
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.moduleName}
						color='third'
					/>
					<TextField
						label='Video-title'
						name='lecName'
						color='third'
						fullWidth
						variant='outlined'
						onChange={(e) => handleChange(e)}
						value={formData.lecName}
					/>
				</Stack>
			</Box>
		</>
	)
}

export default CourseContent