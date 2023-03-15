import { HomeIcon, CreateIcon, LogoutIcon, InfoIcon, HelpCenterIcon } from "../../components/atoms/icons/icons"

const menuList = [
	{
		name: "Dashboard",
		path: "/admindash",
		icon: <HomeIcon />
	},
	{
		name: "Members",
		path: "/admindash/members",
		icon: <CreateIcon />
	},
	{
		name: "Create course",
		path: "/admindash/cc",
		icon: <CreateIcon />
	},
	{
		name: "Manage",
		path: "/admindash/manage",
		icon: <CreateIcon />
	},
	{
		name: "Profile",
		path: "/admindash/profile",
		icon: <CreateIcon />
	},
	{
		name: "Setup",
		path: "/admindash/setup",
		icon: <CreateIcon />
	}
]

export default menuList
