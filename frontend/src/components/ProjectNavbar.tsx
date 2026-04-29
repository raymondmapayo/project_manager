import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";

import React, { useState } from "react";
import { keyframes } from "@mui/material/styles";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(120deg); }
`;

const ProjectNavbar = ({ open }: { open: boolean }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        zIndex: (theme) => theme.zIndex.drawer + 1,

        ml: open ? "270px" : "70px",
        width: open ? "calc(100% - 270px)" : "calc(100% - 70px)",

        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* LEFT SIDE → DATE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "gray",
              fontWeight: 500,
            }}
          >
            {formattedDate}
          </Typography>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* SEARCH */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              width: 250,
              minWidth: 180,
            }}
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />
            <InputBase placeholder="Search..." fullWidth />
          </Box>

          {/* NOTIFICATION */}
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* SETTINGS (TUYOK-TUYOK 🔄) */}
          <IconButton>
            <SettingsIcon
              sx={{
                animation: `${spin} 2s linear infinite`,
                color: "#555",
              }}
            />
          </IconButton>

          {/* PROFILE */}
          <IconButton onClick={handleMenuOpen}>
            <Avatar src="https://i.pravatar.cc/150?img=12" />
          </IconButton>

          {/* MORE */}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* MENU */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default ProjectNavbar;
