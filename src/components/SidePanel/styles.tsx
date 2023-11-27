import {
  Toolbar,
  Box,
  ListItemButton,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";

const DRAWER_WIDTH = "100vw";

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

export const StyledListItemIcon = styled(ListItemIcon)<{ open: boolean }>(
  ({ open }) => ({
    minWidth: "unset",
    marginRight: open ? 12 : 0,
  })
);

export const StyledListItemButton = styled(ListItemButton)<{ open: boolean }>(
  ({ open }) => ({
    paddingLeft: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
  })
);

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

export const StyledNavLink = styled((props: NavLinkProps) => (
  <NavLink {...props} />
))(({ theme }) => ({
  li: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,

    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
  },

  "&.active": {
    color: theme.palette.primary.light,
    li: {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
