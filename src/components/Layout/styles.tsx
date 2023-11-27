import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

export const StyledDivColumn = styled("div")(() => ({
  width: "100%",
  padding: "2.2858rem 3.5715rem 3.5715rem 3.5715rem",
}));

export const StyledMain = styled("main")(() => ({
  height: "calc(100% - 3.5715rem - 2.2858rem)",
}));
