import React from "react"
import BackWrapper from "../../components/backWrapper/BackWrapper"
import SetupForm from "../../components/Forms/SetupForm"
import menuList from "./menuList"
const AdminSetup = () => {
	return (
		<BackWrapper menuList={menuList}>
			<SetupForm />
		</BackWrapper>
	)
}

export default AdminSetup
