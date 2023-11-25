import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDivRow = styled("div")<{ gap: number }>(({ gap }) => ({
  display: "flex",
  alignItems: "center",
  gap,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "19.36px",
}));

export const StyledImg = styled("img")(() => ({
  display: "block",
  width: 40,
  height: 40,
}));
