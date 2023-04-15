import React, { useState, useEffect } from "react"
import axios from "axios"
import { TextField, Button, Box, Input, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import CloseIcon from "@mui/icons-material/Close"
import { closeModel, openModel, closeLogout, openSnack } from "../../store/systemSlice"
import { addLogin, addType, addId, addToken } from "../../store/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { patchData, postData } from "../DataFetch/DataFetch"

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const CommonModal = (props) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [file, setFile] = useState("")
	const [moduleData, setModuleData] = useState({
		courseId: null,
		moduleId: null,
		moduleName: "",
		lecName: "",
		path: ""
	})
	let auth = useSelector((state) => state.auth)
	let header = {
		headers: { authorization: `Bearer ${auth.token}` }
	}

	let modalProps = props.modalProps
	let setModalProps = props.setModalProps
	// const [openModal, setOpenModal] = useState(false)
	// const [closeModal, setCloseModal] = useState(false)

	const handleClose = () => {
		dispatch(closeLogout())
		setModalProps(modalProps)
		props.setOpenModal(false)
	}

	const handleLogout = () => {
		dispatch(closeModel())
		// props.setOpenModal(false)
		let keysToRemove = ["isLoggedIn", "isAdmin", "userId", "token"]

		for (let key of keysToRemove) {
			localStorage.removeItem(key)
		}
		dispatch(addLogin(false))
		dispatch(addType(false))
		dispatch(addId(""))
		dispatch(addToken(""))
		// window.location.reload(false);
		navigate("/")
		dispatch(openSnack("Log out successful"))
	}

	const emailSubmit = () => {
		let dataBody = { email: modalProps.email }
		if (modalProps.forgot) {
			//const response = postData('resetpasswordemail',dataBody)
		} else {
			//const response =  postData('admin/memberinviteemail',dataBody,header)
		}
	}

	const moduleSubmit = () => {
		setModuleData({ ...moduleData, lecName: modalProps.videoTitle })
		if (modalProps.isModuleAdd) {
			//const response = postData('module',dataBody,header)
		} else {
			// const response = patchData("file", dataBody,header)
		}
	}
	const handleFileChange = (event) => {
		setFile(event.target.files[0])
	}
	const handleUpload = async () => {
		const Data = new FormData()
		Data.append("file", file)
		Data.append("upload_preset", "rdizbhea")
		const response = await axios.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
		setModuleData({ ...moduleData, path: response.data.secure_url })
	}

	return (
		<>
			<Dialog
				open={props.openModal}
				TransitionComponent={Transition}
				keepMounted
				fullWidth={true}
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle variant='h5'>{modalProps.title}</DialogTitle>

				<DialogActions sx={{ flexDirection: "column", gap: "2rem", position: "relative" }}>
					<Box sx={{ position: "absolute", top: "-3.5rem", right: "0.75rem" }}>
						<CloseIcon
							fontSize='large'
							onClick={() => {
								// setEmail("")
								// setError(false)
								// setErrorText("")
								props.setOpenModal(!props.openModal)
							}}
						/>
					</Box>

					{/* Module & Video Fowm Modal */}

					{modalProps.isModuleEdit && (
						<TextField
							label='Module Title'
							// error={error}
							variant='outlined'
							color='third'
							// helperText={errorText}
							fullWidth
							value={modalProps.moduleTitle}
							onChange={(e) => setModalProps({ ...modalProps, moduleTitle: e.target.value })}
						/>
					)}
					{(modalProps.videoTitle || modalProps.videoTitle == "") && (
						<TextField
							label='Video Title'
							// error={error}
							variant='outlined'
							color='third'
							// helperText={errorText}
							fullWidth
							value={modalProps.videoTitle}
							onChange={(e) => setModalProps({ ...modalProps, videoTitle: e.target.value })}
						/>
					)}
					{(modalProps.video || modalProps.video == "") && (
						<>
							<Typography variant='body1'> Upload Video Below</Typography>
							<input type='file' onChange={handleFileChange} />
							<Button sx={{ marginTop: "2rem" }} onClick={handleUpload}>
								Upload
							</Button>
							<Button sx={{ marginTop: "2rem" }} onClick={(e) => moduleSubmit(e)} variant='contained' color='secondary'>
								Submit
							</Button>
						</>
					)}

					{/* Email invite modal */}

					{(modalProps.email || modalProps.email == "") && (
						<>
							<TextField
								label='Email'
								// error={error}
								variant='outlined'
								color='third'
								// helperText={errorText}
								fullWidth
								value={modalProps.email}
								onChange={(e) => setModalProps({ ...modalProps, email: e.target.value })}
							/>

							<Button onClick={(e) => emailSubmit(e)} variant='contained' color='secondary'>
								Send
							</Button>
						</>
					)}

					{/* Logout Modal */}

					{modalProps.subTitle && (
						<>
							<Typography variant='body1'>{modalProps.subTitle}</Typography>
							<Box sx={{ display: "flex", gap: "2rem" }}>
								<Button onClick={(e) => handleClose(e)} variant='contained' color='secondary'>
									Cancel
								</Button>
								<Button onClick={(e) => handleLogout(e)} variant='contained' color='secondary'>
									Logout
								</Button>
							</Box>
						</>
					)}

					{}
				</DialogActions>
			</Dialog>
		</>
	)
}

export default CommonModal
