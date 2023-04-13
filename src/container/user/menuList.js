import { HomeIcon, CreateIcon, LogoutIcon, InfoIcon, HelpCenterIcon  } from '../../components/atoms/icons/icons';

const menuList = [
    {
        name: "Dashboard",
        path: "/dash/",
        icon: <HomeIcon />,
    },
    {
        name: "Subscriptions",
        path: "/dash/subscriptions",
        icon: <CreateIcon />,
    },
    {
        name: "Create course",
        path: "/dash/cc",
        icon: <CreateIcon />,
    },
    {
        name: "Manage",
        path: "/dash/manage",
        icon: <CreateIcon />,
    },
    {
        name: "Memberships",
        path: "/dash/memberships",
        icon: <CreateIcon />,
    },
    {
        name: "Guidelines",
        path: "/dash/guidelines",
        icon: <CreateIcon />,
    },
]

export default menuList;