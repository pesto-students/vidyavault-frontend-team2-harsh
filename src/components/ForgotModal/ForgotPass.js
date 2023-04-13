import React, { useState, useEffect } from "react"
import { TextField, Button, Box } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import CloseIcon from "@mui/icons-material/Close"

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const ForgotPass = (props) => {
	let openModal = props.openModal
	const [email, setEmail] = useState("")
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState("")

	const postData = async () => {
		// axios
		// 	.post("https://vidyavault.onrender.com/api/admin/", { email })
		// 	.then((response) => {
		// 		if (response.data === "send email success") {
		// 			setEmail("")
		// 			setError(false)
		// 			setErrorText("")
		// 			props.setOpenModal(false)
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		setError(true)
		// 		setErrorText(error)
		// 	})
		// console.log(response)
	}

	const handleClose = (e) => {
		if (email.length === 0 && e.target.innerText == "SEND") {
			setError(true)
			setErrorText("Field can't be empty")
		} else {
			postData()
		}
	}
	return (
		<>
			<Dialog
				open={openModal}
				TransitionComponent={Transition}
				keepMounted
				fullWidth={true}
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle variant='h5'>Enter Email to send Reset password link</DialogTitle>

				<DialogActions sx={{ flexDirection: "column", gap: "2rem", position: "relative" }}>
					<Box sx={{ position: "absolute", top: "-3.5rem", right: "0.75rem" }}>
						<CloseIcon
							fontSize='large'
							onClick={() => {
								setEmail("")
								setError(false)
								setErrorText("")
								props.setOpenModal(!openModal)
							}}
						/>
					</Box>
					<TextField
						label='Email'
						error={error}
						variant='outlined'
						color='third'
						helperText={errorText}
						fullWidth
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Button onClick={(e) => handleClose(e)} variant='contained' color='secondary'>
						Send
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default ForgotPass
