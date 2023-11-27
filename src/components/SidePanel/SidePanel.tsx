import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  IconButton,
  Box,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "components/Logo";
import {
  StyledToolBar,
  StyledLogoBox,
  StyledListItemButton,
  StyledListItemIcon,
  StyledDrawerHeader,
  StyledDrawer,
  StyledNavLink,
} from "./styles";
import { menu } from ".";
import { Icon } from "../Icon";
import { useLocation } from "react-router-dom";

const DRAWER_WIDTH = 233;

const DRAWER_PAPER_PROPS = {
  style: {
    backgroundColor: "transparent",
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
    borderRight: "none",
    background: "white",
  },
};

export const SidePanel = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [activeLinkPath, setActiveLinkPath] = useState(location.pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveLinkPath(location.pathname);
  }, [location]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile ? (
        <StyledDrawer
          variant="permanent"
          open={open}
          PaperProps={DRAWER_PAPER_PROPS}
        >
          <StyledDrawerHeader open={open}>
            <IconButton onClick={handleDrawerToggle}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </StyledDrawerHeader>
          <List>
            {menu.map((item) => (
              <StyledNavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <StyledListItemButton open={open}>
                    <StyledListItemIcon open={open}>
                      <Icon
                        src={
                          activeLinkPath.includes(item.path)
                            ? item.icon[1]
                            : item.icon[0]
                        }
                        alt={item.name}
                      />
                    </StyledListItemIcon>
                    <ListItemText
                      sx={{ opacity: open ? 1 : 0 }}
                      primary={item.name}
                    />
                  </StyledListItemButton>
                </ListItem>
              </StyledNavLink>
            ))}
          </List>
        </StyledDrawer>
      ) : (
        <Box
          component="nav"
          sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        >
          <StyledDrawer
            variant="permanent"
            PaperProps={DRAWER_PAPER_PROPS}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
              },
            }}
            open
          >
            <StyledToolBar>
              <StyledLogoBox>
                <Logo />
              </StyledLogoBox>
            </StyledToolBar>
            <List>
              {menu.map((item) => (
                <StyledNavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <ListItem disablePadding>
                    <StyledListItemButton open>
                      <StyledListItemIcon open>
                        <Icon
                          src={
                            activeLinkPath.includes(item.path)
                              ? item.icon[1]
                              : item.icon[0]
                          }
                          alt={item.name}
                        />
                      </StyledListItemIcon>
                      <ListItemText primary={item.name} />
                    </StyledListItemButton>
                  </ListItem>
                </StyledNavLink>
              ))}
            </List>
          </StyledDrawer>
        </Box>
      )}
    </Box>
  );
};
