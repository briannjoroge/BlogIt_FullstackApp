import {
  Delete,
  Home,
  Logout,
  Menu as MenuIcon,
  OpenInNew,
  Person,
  Search,
  SecurityUpdate,
  ViewList,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarLoggedInUser() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/blogs">
            <ListItemIcon>
              <ViewList />
            </ListItemIcon>
            <ListItemText primary="My Blogs" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/new-blog">
            <ListItemIcon>
              <OpenInNew />
            </ListItemIcon>
            <ListItemText primary="New Blog" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/deleted-blogs">
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText primary="Dustbin" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/user">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/update-password">
            <ListItemIcon>
              <SecurityUpdate />
            </ListItemIcon>
            <ListItemText primary="Update Password" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "hsla(210, 79%, 46%, 0.9)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { sm: "row", md: "row" },
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              fontWeight="bold"
              component={Link}
              to="/dashboard"
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BlogIt
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.15)",
                p: "2px 8px",
                borderRadius: "5px",
              }}
            >
              {/* hide search bar in small screens */}
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Search
                  sx={{
                    color: "white",
                    mr: 1,
                  }}
                />
                <InputBase
                  placeholder="Search..."
                  sx={{ color: "white", width: "140px" }}
                />
              </Box>
            </Box>

            <IconButton color="inherit" sx={{ "&:hover": { opacity: 0.8 } }}>
              <Person />
            </IconButton>

            <Button
              color="inherit"
              sx={{ "&:hover": { opacity: 0.8 } }}
              startIcon={<Logout />}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>

        {/* For displaying search bar on small screen */}
        <Toolbar
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.15)",
              p: "2px 8px",
              borderRadius: "5px",
            }}
          >
            <Search sx={{ color: "white", mr: 1 }} />
            <InputBase
              placeholder="Search..."
              sx={{ color: "white", width: "250px" }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default NavbarLoggedInUser;
