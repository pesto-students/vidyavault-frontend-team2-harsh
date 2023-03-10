import { HomeIcon, CreateIcon, LoginIcon, InfoIcon, HelpCenterIcon  } from '../../components/atoms/icons/icons';

const menuList = [
    {
        name: "Home",
        path: "/",
        icon: <HomeIcon />,
    },
    {
        name: "Sign up",
        path: "/signup",
        icon: <CreateIcon />,
    },
    {
        name: "Sign in",
        path: "/signin",
        icon: <LoginIcon />,
    },
    {
        name: "Organization",
        path: "/org",
        icon: <InfoIcon />,
    },
    {
        name: "About",
        path: "/about",
        icon: <InfoIcon />,
    },
    {
        name: "Help",
        path: "/help",
        icon: <HelpCenterIcon />,
    }
]

export default menuList;