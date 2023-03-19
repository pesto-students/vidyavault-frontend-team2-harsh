import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import ProfileForm from "../../components/Forms/ProfileForm"
import axios from "axios"

const AdminProfile = () => {
	return (
		<BackWrapper menuList={menuList}>
			<ProfileForm />
		</BackWrapper>
	)
}

export default AdminProfile
