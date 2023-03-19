import {
	Settings,
	InsertEmoticon,
	LibraryBooks,
	Person,
	Analytics,
	ManageAccounts,
	AdminPanelSettings
} from "@mui/icons-material"

const menuList = [
	{
		name: "Dashboard",
		path: "/admindash",
		icon: <AdminPanelSettings />
	},
	{
		name: "Members",
		path: "/admindash/members",
		icon: <InsertEmoticon />
	},
	{
		name: "Create course",
		path: "/admindash/cc",
		icon: <LibraryBooks />
	},
	{
		name: "Manage",
		path: "/admindash/manage",
		icon: <ManageAccounts />
	},
	{
		name: "Profile",
		path: "/admindash/profile",
		icon: <Person />
	},
	{
		name: "Setup",
		path: "/admindash/setup",
		icon: <Settings />
	},
	{
		name: "Analytics",
		path: "/admindash/analytics",
		icon: <Analytics />
	}
]

export default menuList
