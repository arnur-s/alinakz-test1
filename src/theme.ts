import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.4286rem",
      lineHeight: "24.2px",
      color: "#233D82",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.1429rem",
      lineHeight: "19.36px",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#233D82",
      light: "#fff",
    },
    background: {
      default: "#e9f5ff",
    },
  },
});
