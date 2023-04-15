import React, { useState, useEffect } from "react"
import menuList from "./menuList"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"
import PersonRemoveIcon from "@mui/icons-material/PersonRemove"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getData, postData } from "../../components/DataFetch/DataFetch"
import {
	Avatar,
	Button,
	Card,
	Box,
	Grid,
	CardContent,
	IconButton,
	Container,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Typography,
	TextField
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Link } from "react-router-dom"
import MockMembers from "../../Mock_Data/Mockmembers.json"
import CustomAdminAppBar from "../../components/header/CustomAdminAppBar"

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const Members = () => {
	let auth = useSelector((state) => state.auth)
	let sys = useSelector((state) => state.system)
	const [memberDetails, setMemberDetails] = useState({
		name: "",
		Avatar: ""
	})

	const [members, setMembers] = useState([])

	const [email, setEmail] = useState("")
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState("")
	const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
		let header = {
			headers: { authorization: `Bearer ${auth.token}` }
		}
		const res = postData("admin/org", { orgId: auth.id }, header)
		res
			.then((response) => {
				setMembers(response.data.data)
			})
			.catch((error) => {
				alert(error)
			})
	}, [])

	const handleClose = (e) => {
		if (email.length === 0 && e.target.innerText == "SEND") {
			setError(true)
			setErrorText("Field can't be empty")
		} else if (e.target.innerText !== "SEND") {
			setOpenModal(false)
		} else {
			let header = {
				headers: { authorization: `Bearer ${auth.token}` }
			}
			const res = postData("admin/memberinviteemail", { email: email }, header)
			res
				.then((response) => {
					if (response.status === 200) {
						setEmail("")
						setError(false)
						setErrorText("")
						setOpenModal(false)
					}
				})
				.catch((error) => {
					setError(true)
					setErrorText(error)
				})
		}
	}
	const handleKickout = (member) => {
		let header = {
			headers: { authorization: `Bearer ${auth.token}` }
		}
		const res = postData("admin/removemember", { memId: member.memId }, header)
		res
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				alert(error)
			})
	}

	return (
		<BackWrapper menuList={menuList}>
			<Dialog
				open={openModal}
				TransitionComponent={Transition}
				keepMounted
				fullWidth={true}
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle variant='h5'>Enter Email to send Invite request</DialogTitle>

				<DialogActions sx={{ flexDirection: "column", gap: "2rem" }}>
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
			<Box sx={{ flexGrow: 1, position: "relative", minHeight: "90vh" }}>
				<CustomAdminAppBar OrgName={"Saurabh School"} />
				<Button
					color='secondary'
					variant='contained'
					onClick={() => setOpenModal(!openModal)}
					sx={{
						zIndex: "100",
						position: "fixed",
						bottom: "20px",
						right: "20px",
						width: "6rem",
						height: "6rem",
						borderRadius: "8rem"
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Typography variant='subtitle1' marginTop={2}>
							Invite
						</Typography>
						<Typography variant='h4'> + </Typography>
					</Box>
				</Button>

				<Grid sx={{ padding: "2rem" }} container spacing={2}>
					{members !== null ? (
						members.map((member, index) => {
							return (
								<Grid item xs={12} sm={6} md={4} key={index}>
									<Card sx={{ height: "100%", bgcolor: "primary.dark", boxShadow: "0px 3px 10px #9ccd62" }}>
										<CardContent
											sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}
										>
											<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
												<Avatar
													alt={member.name}
													src='https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
													sx={{ width: 80, height: 80, mb: 1 }}
												/>
												<Typography gutterBottom variant='h5' component='div'>
													{member.name}
												</Typography>
											</Box>

											<Button
												color='secondary'
												variant='contained'
												component={Link}
												// to={`/members/${member.id}`}
												to='id'
												sx={{ mt: 2, borderRadius: 5 }}
											>
												View Profile
											</Button>
											<IconButton sx={{ mt: 2 }} onClick={() => handleKickout(member)}>
												<PersonRemoveIcon color='secondary' />
											</IconButton>
										</CardContent>
									</Card>
								</Grid>
							)
						})
					) : (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#f6f8e2",
								height: "100vh",
								width: "100vw"
							}}
						>
							<Typography color='secondary' variant='h3'>
								Click the invite buttom below to invite new members
							</Typography>
						</Box>
					)}
				</Grid>
			</Box>
		</BackWrapper>
	)
}

export default Members
