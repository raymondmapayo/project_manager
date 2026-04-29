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
  Button,
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

const drawerWidth = 270;

type MenuItem =
  | {
      text: string;
      icon: React.ReactNode;
      path: string;
    }
  | {
      divider: true;
    };

const menu: MenuItem[] = [
  { text: "Create New", icon: <AddIcon />, path: "/create" },
  { divider: true },
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Project List View", icon: <ViewListIcon />, path: "/projects/list" },
  { text: "Project Card View", icon: <GridViewIcon />, path: "/projects/card" },
  {
    text: "Project Board View",
    icon: <DashboardIcon />,
    path: "/projects/board",
  },
];

const footerMenu = [
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "About", icon: <InfoIcon /> },
  { text: "Feedback", icon: <FeedbackIcon /> },
];

type Props = {
  open: boolean;
  onToggle: () => void;
};

const ProjectSidebar = ({ open, onToggle }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 70,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 70,
          transition: "0.3s",
          overflow: "hidden", // IMPORTANT (no double scroll)
          boxSizing: "border-box",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* ================= HEADER (NOT SCROLLABLE) ================= */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: open ? "space-between" : "center",
          }}
        >
          {open && (
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Project Manager
            </Typography>
          )}

          <IconButton
            onClick={onToggle}
            size="small"
            sx={{
              position: "absolute",
              top: "50%",
              right: -14,
              transform: "translateY(-50%)",
              width: 32,
              height: 32,
              border: "1px solid #ddd",
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            {open ? (
              <ChevronLeftIcon sx={{ fontSize: 18 }} />
            ) : (
              <ChevronRightIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Toolbar>
      </Box>

      {/* ================= SCROLLABLE AREA (EVERYTHING ELSE) ================= */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",

          /* ✅ SCROLLBAR STYLE (MUI way) */
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // same as your AntD
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c1c1c1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#999",
          },
        }}
      >
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
                  justifyContent: open ? "initial" : "center",
                  px: 2,
                  mx: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            );
          })}
        </List>

        <List
          sx={{
            mt: 10, // 👈 move down a little
          }}
        >
          {footerMenu.map((item) => (
            <ListItemButton
              key={item.text}
              sx={{ justifyContent: open ? "initial" : "center" }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                }}
              >
                {item.icon}
              </ListItemIcon>

              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          ))}
        </List>

        {/* PROMO */}
        <Box
          sx={{
            m: 2,
            p: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Plan about to expire
          </Typography>

          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Enjoy 10% off when renewing your plan today.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              borderRadius: "12px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            Get the discount
          </Button>
        </Box>

        {/* PROFILE */}
        <Box sx={{ display: "flex", alignItems: "center", p: 2, gap: 1.5 }}>
          <Avatar src="https://i.pravatar.cc/150?img=12" />

          {open && (
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Raymond Mapayo
              </Typography>
              <Typography variant="caption" color="text.secondary">
                raymond@email.com
              </Typography>
            </Box>
          )}

          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProjectSidebar;
