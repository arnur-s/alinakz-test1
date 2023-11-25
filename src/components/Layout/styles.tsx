import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

export const StyledDivColumn = styled("div")(() => ({
  width: "100%",
  padding: "32px 50px 50px 50px",
}));
