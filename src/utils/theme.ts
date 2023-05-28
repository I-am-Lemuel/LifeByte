
import { createTheme } from "@mui/material/styles";

// colors: {
//     primary: '#B8ED91',
//     white: '#FFFFFF',
//     flamingo: '#BF616A',
//     peach: '#EBCB8B',
//     light: '#2A3352',
//     dark: '#181E2A',
//     darker: '#0F141F',
// },

export const theme = createTheme({
 palette: {
   primary: {
        main: "#B8ED91",
        light: "#B8ED91",
        dark: "#B8ED91",
        contrastText: "#FFFFFF",
   },
    secondary: {
        main: "#BF616A",
        light: "#BF616A",
        dark: "#BF616A",
        contrastText: "#FFFFFF",
    },
    error: {
        main: "#BF616A",
        light: "#BF616A",
        dark: "#BF616A",
        contrastText: "#FFFFFF",
    },
    warning: {
        main: "#EBCB8B",
        light: "#EBCB8B",
        dark: "#EBCB8B",
        contrastText: "#FFFFFF",
    },
    text: {
        primary: "#ffffff",
        secondary: "#ffffff",
        disabled: "#ffffff"
    },
    background: {
        paper: "#181E2A",
        default: "#181E2A",
    },
 },
});