import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#01081d",
    },
    primary: {
      main: "#8e076c",
      light: "#e277ae",
      contrastText: "#2567ff",
    },
    secondary: {
      main: "#250d3a",
      light: "#5d0b55",
      dark: "#1c1927",
    },
    text: {
      primary: "#E5e1f9",
      secondary: "#bbb7ce",
    },
  },
  typography: {
    fontFamily: [
      "SourceCodePro-normal",
      "SourceCodePro-semibold",
      "SourceCodePro-bold",
      "sans-serif",
    ].join(","),
    body2: {
      fontSize: 14,
      letterSpacing: "1px",
    },
    body1: {
      fontSize: 18,
      letterSpacing: "1.1px",
    },
    h4: {
      fontWeight: "bold",
      fontSize: 28,
      letterSpacing: "1.5px",
    },
    h3: {
      fontWeight: "bold",
      fontSize: 32,
      letterSpacing: "1.5px",
    },
  },
});

export default theme;
