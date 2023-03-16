import { Button, Checkbox, Drawer, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React, { useEffect, useState } from "react"
import BackWrapper from "../backWrapper/BackWrapper"
import menuList from "../../container/user/menuList"
import { useSelector } from "react-redux"
import { EditIcon, DeleteIcon, AddIcon } from "../atoms/icons/icons"
import BasicModal from "../Modals/Modal"

const EditCourse = () => {
	const [open, setOpen] = useState("none")
	const [itemIndex, setItemIndex] = useState()

	const [openModal, setOpenModal] = useState(false)

	const [moduleData, setModuleData] = useState("")

	let res = useSelector((state) => state.courses)

	let data = res.courses[res.courses.length - 1]
	let CourseData = res.courseFile[res.courseFile.length - 1]

	let toggleFn = (inx) => {
		setItemIndex((prev) => {
			if (prev == inx) {
				return
			} else {
				return inx
			}
		})
	}
	let handleFn = (e) => {
		setOpen("none")
	}
	let drawerFn = (e) => {
		e.stopPropagation()
		setOpen("block")
	}

	const editVName = (e, file) => {
		console.log(file)
	}

	// const handleChange = (e) => {
	// 	let value = e.target.innerText
	// 	console.log(value)
	// 	if (e.target.data == "Module")
	// 		setModuleData({
	// 			...moduleData,
	// 			moduleName: value
	// 		})
	// 	else
	// 		setModuleData({
	// 			...moduleData,
	// 			files: [value]
	// 		})
	// }

	const handleSubmit = () => {
		console.log(moduleData)
	}

	const handleModal = (e, VideoFile) => {
		setModuleData(VideoFile.lecName)
		setOpenModal(true)
	}
	return (
		<>
			<BackWrapper menuList={menuList}>
				<BasicModal openModal={openModal} setOpenModal={setOpenModal} moduleData={moduleData} />
				<Stack direction='row'>
					<Box
						sx={{
							width: "65%",
							height: "100vh",
							borderRadius: 5,
							float: "right",
							display: { sm: open, md: "block", xs: open }
						}}
					>
						<Stack alignItems='center'>
							<Typography variant='h3' margin={2}>
								Curriculum
							</Typography>
							{CourseData.map((item, index) => {
								return (
									<Box key={index} sx={{ width: "100%", height: "100%" }}>
										<Button
											variant='contained'
											size='small'
											fullWidth
											color='third'
											sx={{ margin: 0.4, textTransform: "none" }}
											onClick={() => toggleFn(index)}
										>
											<Typography variant='h5' data='Module' margin={1}>
												{item.moduleName}
											</Typography>
											<AddIcon />
										</Button>
										{index == itemIndex &&
											item.files.map((VideoFile, index) => {
												return (
													<Box key={index} sx={{ textTransform: "none" }} onClick={(e) => handleModal(e, VideoFile)}>
														<Stack direction='row' margin={1} alignItems='center' justifyContent='center'>
															<EditIcon onClick={(e) => editVName(e, VideoFile)} />
															<Typography variant='h6' data='Lecture' margin={1}>
																{VideoFile.lecName}
															</Typography>
															<DeleteIcon />
														</Stack>
													</Box>
												)
											})}
									</Box>
								)
							})}
							<Button variant='contained' startIcon={<AddIcon />} color='third' sx={{ margin: 0.4 }}>
								<Typography variant='h6' margin={1}>
									Add new module
								</Typography>
							</Button>

							<Button variant='contained' color='success' sx={{ margin: 0.4 }} onClick={handleSubmit}>
								<Typography variant='h6' margin={1}>
									Save Changes
								</Typography>
							</Button>
						</Stack>
					</Box>

					<Box
						sx={{
							width: { md: "60%", sm: "100%", xs: "100%" },
							height: "100vh",
							bgcolor: "primary.main",
							borderRadius: 5,
							margin: 1
						}}
						onClick={(e) => handleFn(e)}
					>
						<Stack alignItems='center'>
							<Typography variant='h4' margin={2}>
								{data.courseName}
							</Typography>
							<Button
								variant='contained'
								color='secondary'
								sx={{ display: { md: "none" } }}
								onClick={(e) => drawerFn(e)}
							>
								Curriculum
							</Button>
							<Box sx={{ height: "300px", width: "100%", bgcolor: "primary.dark", borderRadius: 5 }}></Box>
							<Typography variant='h6' margin={2}>
								{data.description}
							</Typography>
						</Stack>
					</Box>
				</Stack>
			</BackWrapper>
		</>
	)
}

export default EditCourse
