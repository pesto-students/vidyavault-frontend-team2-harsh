import { HomeIcon, CreateIcon, LogoutIcon, InfoIcon, HelpCenterIcon  } from '../../components/atoms/icons/icons';
import {
    Person,
	InsertEmoticon,
	LibraryBooks,
	ManageAccounts,
} from "@mui/icons-material"

const menuList = [
    {
        name: "Dashboard",
        path: "/dash/",
        icon: <HomeIcon />,
    },
    {
        name: "Subscriptions",
        path: "/dash/subscriptions",
        icon: <InsertEmoticon />,
    },
    {
        name: "Create course",
        path: "/dash/cc",
        icon: <CreateIcon />,
    },
    {
        name: "Manage",
        path: "/dash/manage",
        icon: <ManageAccounts />,
    },
    {
        name: "Memberships",
        path: "/dash/memberships",
        icon: <LibraryBooks />,
    },
    {
        name: "Guidelines",
        path: "/dash/guidelines",
        icon: <InfoIcon />,
    },
]

export default menuList;