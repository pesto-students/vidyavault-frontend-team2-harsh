import { createTheme } from "@mui/material/styles";

const FONT = "'Slabo 27px', serif";

const theme = createTheme({
    palette: {
        primary: {
            light: "#ffffff",
            main: "#f2f2f2",
            dark: "#dadada",
        },
        secondary: {
            light: "#4d5158",
            main: "#20262e",
            dark: "#000000",
        },
        third: {
            // light: "#e1f6f2",
            // main: "#cdf0ea",
            // dark: "#b9d8d3",
            light: "#99dcd8",
            main: "#80d3c9",
            dark: "#00a693"

            // light: "#99dcd8",
            // main: "#80d3c9",
            // dark: "#00a693"
        }
    },
    typography: {
        fontFamily: FONT,
    },
});

theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.6rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.4rem',
    },
};

theme.typography.h2 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.6rem',
    },
};

theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.8rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },
};

theme.typography.h4 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
    },
};

theme.typography.h5 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
    },
};

theme.typography.h6 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};

export default theme;