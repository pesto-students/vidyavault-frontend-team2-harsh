import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Stack } from "@mui/system"
import CourseCreation from "./CourseCreation"
import CourseContent from "./CourseContent"
import { UploadIcon, DescriptionIcon, NoteAddIcon } from "../atoms/icons/icons"
import { useDispatch, useSelector } from "react-redux"
import { openSnack, closeSnack } from "../../store/systemSlice"
import CustomSnackbar from "../snackbar/Snackbar"

const steps = [
	{ title: "Course Creation", icon: <NoteAddIcon /> },
	{ title: "Course content", icon: <DescriptionIcon /> },
	{ title: "Upload", icon: <UploadIcon /> }
]

export default function CreateCourseForm() {
	let dispatch = useDispatch()
	let sys = useSelector((state) => state.system)
	const [activeStep, setActiveStep] = React.useState(0)

	const [formData, setFormData] = React.useState({
		courseName: '',
		description: '',
		amount: '',
		moduleName: '',
		lecName: '',
		thumbnail: '',
		path: ''
	})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	const thumFn = () => {
		dispatch(openSnack("Saurabh"))
		console.log(sys)
	}

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleForm = () => {
		setActiveStep(0);
		console.log(formData);
	}

	return (
		<Box sx={{ width: "100%", height: "100%", bgcolor: "primary.main", padding: "1rem", borderRadius: "1rem" }}>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps = {}
					const labelProps = {}
					return (
						<Step key={index} {...stepProps}>
							<StepLabel
								{...labelProps}
								icon={label.icon}
								sx={{ color: index === activeStep ? "third.main" : "secondary.main" }}
							>
								<Typography variant='h6' color={index === activeStep ? "third.main" : "secondary.main"}>
									{label.title}
								</Typography>
							</StepLabel>
						</Step>
					)
				})}
			</Stepper>
			{activeStep == steps.length - 1 ? (
				<React.Fragment>
					<Stack direction='column' justifyContent='center' alignItems='center' spacing={2} margin={5}>
						<Typography variant='h6' color='secondary.main'>
							Click on below button to upload course thumbnail
						</Typography>
						<Button variant='contained' color='secondary' onClick={() => thumFn()}>
							<Typography>Upload course thumbnail</Typography>
						</Button>
						<Typography variant='h6' color='secondary.main'>
							Upload your first video of this course
						</Typography>
						<Button variant='contained' color='secondary' onClick={() => thumFn()}>
							<Typography>Upload video</Typography>
						</Button>
					</Stack>
				</React.Fragment>
			) : activeStep == steps.length - 2 ? (
				<React.Fragment>
					<CourseContent formData={formData} setFormData={setFormData}/>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Box textAlign='center'>
						<CourseCreation formData={formData} setFormData={setFormData}/>
					</Box>
				</React.Fragment>
			)}
			{activeStep === steps.length - 1 ? (
				<React.Fragment>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleForm}>
							<Typography variant='h6' color='secondary'>
								Finish
							</Typography>
						</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					{/* <Typography sx={{ mt: 2, mb: 1 }} variant="h6">Step {activeStep + 1}</Typography> */}
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
							<Typography variant='h6' color='secondary'>
								Back
							</Typography>
						</Button>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleNext}>
							<Typography variant='h6' color='secondary'>
								Next
							</Typography>
						</Button>
					</Box>
				</React.Fragment>
			)}
			<CustomSnackbar />
		</Box>
	)
}
