import React, { useState } from "react"
import axios from "axios"
import { Box, CircularProgress, TextField } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
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
import { openSnack, closeSnack, startLoading, stopLoading } from "../../store/systemSlice"
import CustomSnackbar from "../snackbar/Snackbar"
import { Cloudinary } from "@cloudinary/base"
import { BACKEND_URL } from '../../Constant';
import { LoadingButton } from "@mui/lab"
import {SaveIcon} from '../../components/atoms/icons/icons';
// import { CloudinaryContext, Image } from "@cloudinary/react"

const steps = [
	{ title: "Course Creation", icon: <NoteAddIcon /> },
	{ title: "Course content", icon: <DescriptionIcon /> },
	{ title: "Upload", icon: <UploadIcon /> }
]

// const cloudinary = new Cloudinary({
// 	cloud: {
// 		cloudName: "dd2bmcpqv",
// 		apiKey: "146555182142896",
// 		apiSecret: "tSBBwwHM9zfYnw9DO0PbBRnNtl4"
// 	}
// })

export default function CreateCourseForm() {
	let dispatch = useDispatch()
	let sys = useSelector((state) => state.system);
	let loading = sys.isLoading;
	let auth = useSelector((state) => state.auth)


	const [activeStep, setActiveStep] = useState(0)
	const [videoSuccess, setVideoSuccess] = useState(false)
	const [thumbSuccess, setThumbSuccess] = useState(false)
	const [thumbloading, setThumbLoading] = useState(false)
	const [videoloading, setVideoLoading] = useState(false)
	const [videofile, setVideoFile] = useState("")
	const [thumbfile, setThumbFile] = useState("")
	const [thumbUrl, setThumbUrl] = useState("")
	const [videourl, setVideoUrl] = useState("")

	const [formData, setFormData] = useState({
		courseName: "",
		description: "",
		amount: "",
		moduleName: "",
		lecName: "",
		thumbnail: "",
		path: ""
	})

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleVideoFileChange = (event) => {
		setVideoFile(event.target.files[0])
	}
	const handleThumbFileChange = (event) => {
		setThumbFile(event.target.files[0])
	}
	const handleVideoUpload = async () => {
		setVideoLoading(true)
		const Data = new FormData()
		Data.append("file", videofile)
		Data.append("upload_preset", "rdizbhea")
		try {
			const response = await axios.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
			setVideoUrl(response.data.secure_url)
			setFormData({ ...formData, path: response.data.secure_url })

			setVideoSuccess(true)
			setVideoLoading(false)
			setTimeout(() => {
				setVideoSuccess(false)
				// console.log(videourl)
			}, 1000)
		} catch (error) {
			// console.error(error)
		}
	}
	const handleThumbUpload = async () => {
		setThumbLoading(true)
		const Data = new FormData()
		Data.append("file", thumbfile)
		Data.append("upload_preset", "rdizbhea")
		try {
			const response = await axios.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
			setThumbUrl(response.data.secure_url)
			setFormData({ ...formData, thumbnail: response.data.secure_url })

			setThumbSuccess(true)
			setThumbLoading(false)
			setTimeout(() => {
				setThumbSuccess(false)
				// console.log(thumbUrl)
			}, 1000)
		} catch (error) {
			// console.error(error)
		}
	}
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleForm = () => {
		setActiveStep(0)
	}

	let handleSubmit = async () => {

		dispatch(startLoading());
		if (
			formData.courseName == "" ||
			formData.lecName == "" ||
			formData.description == "" ||
			formData.moduleName == "" ||
			formData.thumbnail == "" ||
			formData.path == ""
		) {
			dispatch(openSnack({ msg: "Missing credentials", type: "error" }));
			dispatch(stopLoading());
			return;
		}

		const data = {
			courseName: formData.courseName,
			thumbnail: formData.thumbnail,
			description: formData.description,
			amount: formData.amount,
			moduleName: formData.moduleName,
			lecName: formData.lecName,
			path: formData.path
		};

		const result = await axios.post(`${BACKEND_URL}/user/cc/${auth.id}`, data, {
			headers: { authorization: `Bearer ${auth.token}` }
		});

		if (result.data.status) {
			dispatch(openSnack({ msg: "congratulations! course created successfuly", type: "success" }));
			dispatch(stopLoading());
		} else {
			dispatch(openSnack({ msg: "Failed", type: "error" }));
			dispatch(stopLoading());
		}
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
						<Stack display='flex' direction='row'>
							<Button
								variant='outlined'
								color='secondary'
								onClick={(e) => {
									e.target.firstChild.click()
								}}
							>
								<input
									style={{ width: "100%" }}
									type='file'
									accept='image/*'
									hidden
									onChange={(e) => handleThumbFileChange(e)}
								/>
								Select Thumbnail
							</Button>
							<TextField disabled variant='outlined' color='third' value={thumbfile.name} />
							{thumbSuccess ? (
								<CheckIcon color='success' />
							) : (
								thumbloading && (
									<Box sx={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
										<CircularProgress size={20} thickness={4} color='secondary' />
									</Box>
								)
							)}
						</Stack>
						<Button variant='contained' color='secondary' onClick={(e) => handleThumbUpload(e)}>
							<Typography>Upload course thumbnail</Typography>
						</Button>

						<Typography variant='h6' color='secondary.main'>
							Upload your first video of this course
						</Typography>
						<Stack display='flex' direction='row'>
							<Button
								variant='outlined'
								color='secondary'
								onClick={(e) => {
									e.target.firstChild.click()
								}}
							>
								<input
									style={{ width: "100%" }}
									type='file'
									accept='video/*'
									hidden
									onChange={(e) => handleVideoFileChange(e)}
								/>
								Select Video
							</Button>
							<TextField disabled variant='outlined' color='third' value={videofile.name} />
							{videoSuccess ? (
								<CheckIcon color='success' />
							) : (
								videoloading && (
									<Box sx={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
										<CircularProgress size={20} thickness={4} color='secondary' />
									</Box>
								)
							)}
						</Stack>
						<Button variant='contained' color='secondary' onClick={(e) => handleVideoUpload(e)}>
							<Typography>Upload video</Typography>
						</Button>
						{loading ? (
							<LoadingButton
								loading
								loadingPosition="start"
								startIcon={<SaveIcon />}
								variant="outlined"
								color="secondary"
							>
								Signing in
							</LoadingButton>
						) : (
							<Button variant='contained' color='secondary' onClick={(e) => handleSubmit(e)}>
								<Typography>submit</Typography>
							</Button>)}
					</Stack>
				</React.Fragment>
			) : activeStep == steps.length - 2 ? (
				<React.Fragment>
					<CourseContent formData={formData} setFormData={setFormData} />
				</React.Fragment>
			) : (
				<React.Fragment>
					<Box textAlign='center'>
						<CourseCreation formData={formData} setFormData={setFormData} />
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