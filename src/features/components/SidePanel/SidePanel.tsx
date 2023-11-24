import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "features/components/Logo";
import {
  StyledToolBar,
  StyledLogoBox,
  StyledListItemButton,
  StyledListItemIcon,
  StyledDrawerHeader,
  StyledDrawer,
} from "./styles";
import { menu } from ".";

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
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);

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
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                <StyledListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <StyledListItemIcon
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.icon} alt={item.name} />
                  </StyledListItemIcon>
                  <ListItemText
                    sx={{ opacity: open ? 1 : 0 }}
                    primary={item.name}
                  />
                </StyledListItemButton>
              </ListItem>
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
                <ListItem key={item.id} disablePadding>
                  <StyledListItemButton>
                    <StyledListItemIcon>
                      <img src={item.icon} alt={item.name} />
                    </StyledListItemIcon>
                    <ListItemText primary={item.name} />
                  </StyledListItemButton>
                </ListItem>
              ))}
            </List>
          </StyledDrawer>
        </Box>
      )}
    </Box>
  );
};
