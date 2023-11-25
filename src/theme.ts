import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: 20,
      lineHeight: "24.2px",
      color: "#233D82",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#233D82",
    },
    background: {
      default: "#e9f5ff",
    },
  },
});
