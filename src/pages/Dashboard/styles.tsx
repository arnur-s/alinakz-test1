import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledTypography = styled(Typography)(() => ({
  lineHeight: "16.94px",
  fontSize: "1.1429rem",
  marginRight: "0.7858rem",
}));

export const StyledDivRow = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const StyledTooltipContainer = styled("div")(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: theme.palette.primary.main,
  fontFamily: "sans-serif, Roboto",
  padding: "8px 12px",
  borderRadius: 4,
  fontWeight: 400,

  "& .custom-tooltip-label": {
    fontSize: "12px",
    lineHeight: "12.1px",
    marginBottom: 6,
  },

  "& .custom-tooltip-entry": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  "& .custom-tooltip-entries": {
    display: "flex",
    gap: 12,
  },

  "& .custom-tooltip-entry-name": {
    fontSize: 10,
    color: "attr(data-color)",
    lineHeight: "9.68px",
    marginBottom: 6,

    "&--green": {
      color: "#00C366",
    },

    "&--red": {
      color: "#EF6060",
    },
  },

  "& .custom-tooltip-entry-value": {
    fontSize: 12,
    lineHeight: "14.52px",
  },
}));
