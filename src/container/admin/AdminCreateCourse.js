import { Box } from "@mui/system"
import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import CreateCourseForm from "../../components/CCForm/CreateCourseForm"
import menuList from "./menuList"

const AdminCreateCourse = () => {
	return (
		<div>
			<BackWrapper menuList={menuList}>
				<Box sx={{ height: "100vh", width: "100%", padding: "1rem", paddingTop: "10vh" }}>
					<CreateCourseForm />
				</Box>
			</BackWrapper>
		</div>
	)
}

export default AdminCreateCourse
