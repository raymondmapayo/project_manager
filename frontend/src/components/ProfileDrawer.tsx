import {
  Drawer,
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ProfileDrawer = ({ open, onClose }: Props) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      hideBackdrop={false}
      slotProps={{
        backdrop: {
          sx: { backgroundColor: "transparent" },
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 20,
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          width: 320,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          p: 2,
          backgroundColor: "#fff",
          overflow: "hidden", // IMPORTANT FIX
        }}
      >
        {/* SCROLLABLE CONTENT AREA */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            pr: 1,
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
              Profile
            </Typography>

            <IconButton onClick={onClose}>✕</IconButton>
          </Box>

          {/* PROFILE SECTION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            {/* AVATAR RING */}
            <Box
              sx={{
                position: "relative",
                width: 90,
                height: 90,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(#52c41a, transparent, #b7f7c1, transparent)",
                  animation: "spinRing 3s linear infinite",
                  WebkitMask:
                    "radial-gradient(circle, transparent 62%, black 63%)",
                  mask: "radial-gradient(circle, transparent 62%, black 63%)",
                }}
              />

              <Avatar
                src="https://i.pravatar.cc/150?img=12"
                sx={{ width: 70, height: 70, zIndex: 2 }}
              />
            </Box>

            <Typography sx={{ mt: 1, fontWeight: 600 }}>
              Raymond Mapayo
            </Typography>

            <Typography sx={{ fontSize: 13, color: "gray" }}>
              Frontend Developer
            </Typography>

            <Typography sx={{ fontSize: 12, color: "gray" }}>
              raymond@gmail.com
            </Typography>

            {/* SMALL AVATARS + ADD BUTTON */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 2.5,
              }}
            >
              <Avatar src="https://i.pravatar.cc/150?img=11" />
              <Avatar src="https://i.pravatar.cc/150?img=32" />
              <Avatar src="https://i.pravatar.cc/150?img=47" />

              <IconButton size="small">
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* MENU */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={menuItem}>
              <HomeIcon fontSize="small" />
              <Typography sx={{ ml: 1 }}>Home</Typography>
            </Box>

            <Box sx={menuItem}>
              <PersonIcon fontSize="small" />
              <Typography sx={{ ml: 1 }}>Profile</Typography>
            </Box>

            <Box sx={menuItem}>
              <FolderIcon fontSize="small" />

              <Typography sx={{ ml: 1 }}>
                Projects
                <Box
                  component="span"
                  sx={{
                    ml: 0.5,
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                    backgroundColor: "#f2bbbc",
                    color: "#ec1e1e",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  3
                </Box>
              </Typography>
            </Box>

            <Box sx={menuItem}>
              <CreditCardIcon fontSize="small" />
              <Typography sx={{ ml: 1 }}>Subscription</Typography>
            </Box>

            <Box sx={menuItem}>
              <SecurityIcon fontSize="small" />
              <Typography sx={{ ml: 1 }}>Security</Typography>
            </Box>

            <Box sx={menuItem}>
              <SettingsIcon fontSize="small" />
              <Typography sx={{ ml: 1 }}>Account Settings</Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 1 }} />

          {/* UPGRADE CARD (FIXED VISIBILITY) */}
          {/* UPGRADE CARD */}
          <Box
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 3,
              background: "linear-gradient(135deg, #eafff0, #ffffff)",
              border: "1px solid #e0f5e9",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: 120,
            }}
          >
            {/* LEFT CONTENT */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#111",
                }}
              >
                35% OFF
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "gray",
                  mt: 0.5,
                  mb: 1.5,
                }}
              >
                Power up Productivity!
              </Typography>

              {/* BUTTON */}
              <Box
                sx={{
                  display: "inline-flex",
                  px: 2,
                  py: 0.8,
                  borderRadius: 999,
                  backgroundColor: "#52c41a",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#3faa12",
                  },
                }}
              >
                Upgrade to Pro
              </Box>
            </Box>

            {/* RIGHT IMAGE (ANIMATED ROCKET) */}
            <Box
              sx={{
                width: 90,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-rocket-small.webp"
                alt="Rocket"
                style={{
                  width: 85,
                  animation: "floatRocket 2.5s ease-in-out infinite",
                }}
              />
            </Box>

            {/* ANIMATION */}
            <style>
              {`
      @keyframes floatRocket {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
    `}
            </style>
          </Box>
        </Box>

        {/* FOOTER (STICKY SAFE) */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
            p: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: 14,
              fontWeight: 600,
              color: "red",
              cursor: "pointer",
              borderRadius: 1,
              py: 0.5,

              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <LogoutIcon fontSize="small" />
            Logout
          </Box>
        </Box>
      </Box>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes spinRing {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Drawer>
  );
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  p: 1.2,
  borderRadius: 2,
  cursor: "pointer",
  "&:hover": { backgroundColor: "#f5f5f5" },
};

export default ProfileDrawer;
