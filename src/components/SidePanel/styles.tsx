import {
  Toolbar,
  Box,
  ListItemButton,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";

const DRAWER_WIDTH = 233;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const StyledToolBar = styled(Toolbar)(() => ({
  paddingLeft: "unset !important",
}));

export const StyledLogoBox = styled(Box)(() => ({
  marginTop: 32,
  marginLeft: 26,
  marginBottom: 10,
}));

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: 32,
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  paddingLeft: 20,
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30,
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const StyledDrawerHeader = styled(DrawerHeader)<{ open: boolean }>(
  ({ open }) => {
    return open
      ? {
          justifyContent: "flex-end",
        }
      : {
          justifyContent: "center",
          paddingLeft: 10,
        };
  }
);
