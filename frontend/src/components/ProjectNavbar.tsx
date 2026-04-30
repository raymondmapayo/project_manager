import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Badge,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";

import React, { useState } from "react";
import { keyframes } from "@mui/material/styles";
import NotificationDrawer from "./NotificationDrawer";
import ProfileDrawer from "./ProfileDrawer";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(120deg); }
`;
const ProjectNavbar = ({ open }: { open: boolean }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
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
        zIndex: (theme) => theme.zIndex.appBar,

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
          <IconButton onClick={() => setOpenNotif(true)}>
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
          <IconButton onClick={() => setOpenProfile(true)}>
            <Box
              sx={{
                position: "relative",
                width: 46,
                height: 46,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* ROTATING GREEN RING */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",

                  background:
                    "conic-gradient(#52c41a, transparent, #b7f7c1, transparent)",

                  animation: "spinRing 20s linear infinite",

                  // creates ring effect (hole in middle)
                  WebkitMask:
                    "radial-gradient(circle, transparent 62%, black 63%)",
                  mask: "radial-gradient(circle, transparent 62%, black 63%)",
                }}
              />

              {/* AVATAR CENTER */}
              <Avatar
                src="https://i.pravatar.cc/150?img=12"
                sx={{
                  width: 36,
                  height: 36,
                  zIndex: 2,
                }}
              />
            </Box>
          </IconButton>

          {/* MORE */}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <NotificationDrawer
        open={openNotif}
        onClose={() => setOpenNotif(false)}
      />
      <ProfileDrawer open={openProfile} onClose={() => setOpenProfile(false)} />
    </AppBar>
  );
};

export default ProjectNavbar;
