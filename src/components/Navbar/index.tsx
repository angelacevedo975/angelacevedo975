import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const drawerWidth = 240;
const navItems = [
  { name: "Home", id: "home" },
  { name: "Who am I?", id: "whoAmI" },
  { name: "My skills", id: "mySkills" },
  { name: "My certifications", id: "myCertifications" },
  { name: "My experience", id: "myExperience" },
];

export default function Navbar({ window }: { window?: () => Window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color="white" variant="h6" sx={{ my: 2 }}>
        ANGEL ACEVEDO'S{" "}
        <span
          style={{
            color: "rgb(255, 165, 0)",
          }}
        >
          PORTFOLIO
        </span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                onClick={() => scrollTo(item.id as any)}
                primary={item.name}
                sx={{
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function scrollTo(
    to: "home" | "whoAmI" | "mySkills" | "myCertifications" | "myExperience"
  ) {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <Menu></Menu>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ANGEL ACEVEDO'S{" "}
            <span
              style={{
                color: "rgb(255, 165, 0)",
              }}
            >
              PORTFOLIO
            </span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                onClick={() => scrollTo(item.id as any)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#262626",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
