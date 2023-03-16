import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { TextField } from "@mui/material"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4
}

export default function BasicModal(props) {
	const { openModal, setOpenModal, moduleData } = props
	const handleOpen = () => setOpenModal(true)
	const handleClose = () => setOpenModal(false)

	const handleSave = () => {
		console.log("1")
	}
	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<TextField variant='outlined' color='third' label={moduleData} />
				</Box>

				<Button onClick={handleSave}>Save</Button>
			</Modal>
		</div>
	)
}
