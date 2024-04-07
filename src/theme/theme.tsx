import { createTheme, alpha } from "@mui/material/styles";

const typography = {
    fontFamily: "Geist", 
    h1: {
        fontFamily: "Time New Roman",
    }, 
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#F3F2F0",
            secondary: "#D0D4DA",
            disabled: "#373E4F",
        },
        background: {
            default: "#2C323F",
            paper: "#373E4F",
        },
        primary: {
            main: "#2C323F",
            light: "#373E4F",
            dark: "#20242E",
        },
        secondary: {
            main: alpha("#D4A373", 0.7),
            light: alpha("#D4A373", 0.4),
            dark: alpha("#D4A373", 1.0),
        },
        error: {
            main: "#E04E41",
            light: "#EF7F67",
            dark: "#CC0B0B",
        },
        warning: {
            main: "#FFB93F",
            light: "#FFCD66",
            dark: "#FF9800",
        },
        info: {
            main: "#57B9F7",
            light: "#79D0FB",
            dark: "#2196F3",
        },
        success: {
            main: "#94A868",
            light: "#F5FDC6",
            dark: "#41521F",
        },
    },
    typography,
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography,
});