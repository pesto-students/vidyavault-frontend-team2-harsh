import { createTheme } from "@mui/material/styles"

const FONT = "'Slabo 27px', serif"

const theme = createTheme({
	palette: {
		primary: {
			light: "#ffffff",
			main: "#f6f8e2",
			dark: "#d8dbc1"
		},
		secondary: {
			light: "#7a7b82",
			main: "#3c3d42",
			dark: "#000000"
		},
		third: {
			light: "#d8f3da",
			main: "#9ccd62",
			dark: "#6a9942"
		}
	},
	typography: {
		fontFamily: FONT
	}
})

theme.typography.h1 = {
	[theme.breakpoints.up("xs")]: {
		fontSize: "2.6rem"
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "3rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "3.4rem"
	}
}

theme.typography.h2 = {
	[theme.breakpoints.up("xs")]: {
		fontSize: "2.2rem"
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "2.6rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2.6rem"
	}
}

theme.typography.h3 = {
	[theme.breakpoints.up("xs")]: {
		fontSize: "1.8rem"
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "2.2rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2.2rem"
	}
}

theme.typography.h4 = {
	[theme.breakpoints.up("xs")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "2rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.8rem"
	}
}

theme.typography.h5 = {
	[theme.breakpoints.up("xs")]: {
		fontSize: "1.2rem"
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.4rem"
	}
}

theme.typography.h6 = {
	[theme.breakpoints.up("xs")]: {
		fontSize: "0.8rem"
	},
	[theme.breakpoints.up("sm")]: {
		fontSize: "1.2rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1rem"
	}
}

export default theme
