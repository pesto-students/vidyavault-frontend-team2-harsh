import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import menuList from "./menuList"
import ProfileForm from "../../components/Forms/ProfileForm"

const AdminProfile = () => {
	return (
		<BackWrapper menuList={menuList}>
			<ProfileForm />
		</BackWrapper>
	)
}

export default AdminProfile
