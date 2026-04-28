import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Divider,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import Home from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

const drawerWidth = 270;

/* =========================
   TYPES
========================= */
type MenuItem =
  | {
      text: string;
      icon: React.ReactNode;
      path: string;
    }
  | {
      divider: true;
    };

/* =========================
   MAIN MENU
========================= */
const menu: MenuItem[] = [
  {
    text: "Create New",
    icon: <AddIcon />,
    path: "/create",
  },
  {
    divider: true,
  },
  {
    text: "Home",
    icon: <Home />,
    path: "/projects/home",
  },
  {
    text: "Project List View",
    icon: <ViewListIcon />,
    path: "/projects/list",
  },
  {
    text: "Project Card View",
    icon: <GridViewIcon />,
    path: "/projects/card",
  },
  {
    text: "Project Board View",
    icon: <DashboardIcon />,
    path: "/projects/board",
  },
];

/* =========================
   FOOTER MENU
========================= */
const footerMenu = [
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "About", icon: <InfoIcon /> },
  { text: "Feedback", icon: <FeedbackIcon /> },
];

/* =========================
   COMPONENT
========================= */
const ProjectSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafafa",
        },
      }}
    >
      {/* =========================
          TOP SECTION
      ========================= */}
      <Box>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Project Manager
          </Typography>
        </Toolbar>

        <Divider />

        {/* MENU */}
        <List>
          {menu.map((item, i) => {
            if ("divider" in item) {
              return <Divider key={i} sx={{ my: 1 }} />;
            }

            return (
              <ListItemButton
                key={item.text}
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(25, 118, 210, 0.12)",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      {/* =========================
          FOOTER SECTION
      ========================= */}
      <Box>
        {/* FOOTER MENU */}
        <List>
          {footerMenu.map((item) => (
            <ListItemButton key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>

        <Divider />

        {/* =========================
            USER PROFILE
        ========================= */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            gap: 1.5,
          }}
        >
          {/* LEFT IMAGE */}
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            sx={{ width: 45, height: 45 }}
          />

          {/* NAME + EMAIL */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Raymond Mapayo
            </Typography>
            <Typography variant="caption" color="text.secondary">
              raymond@email.com
            </Typography>
          </Box>

          {/* THREE DOT MENU */}
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProjectSidebar;
