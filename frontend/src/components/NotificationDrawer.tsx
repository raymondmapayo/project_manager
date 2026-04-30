import {
  Drawer,
  Box,
  Typography,
  List,
  Divider,
  IconButton,
} from "@mui/material";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import SettingsIcon from "@mui/icons-material/Settings";

import { useState } from "react";

// ✅ IMPORT YOUR DATA
import { notifications } from "../utils/notifications";
import type { NotificationItem } from "../utils/notifications";

type Props = {
  open: boolean;
  onClose: () => void;
};

const NotificationDrawer = ({ open, onClose }: Props) => {
  const [tab, setTab] = useState<"all" | "unread" | "archived">("all");

  const tabs = [
    { key: "all", label: "All", count: 22, color: "#000" },
    { key: "unread", label: "Unread", count: 10, color: "#1890ff" },
    { key: "archived", label: "Archived", count: 11, color: "#52c41a" },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      hideBackdrop={false}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "transparent",
          },
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 20,
      }}
    >
      <Box
        sx={{
          width: 400,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          px: 1.5,
        }}
      >
        {/* HEADER */}
        <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid #eee" }}>
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                pl: 1, // 👈 ADD THIS HERE
              }}
            >
              Notifications
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
                pl: 0.5, // 👈 smaller left padding (pulls left a bit)
                pr: 3, // 👈 IMPORTANT: gives space on right so icon is NOT cut
                py: 1,
                minHeight: 56,
              }}
            >
              {/* LEFT: ICONS */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, pl: 1 }}
              >
                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#e6f9ed",
                    "&:hover": { backgroundColor: "#c8f3db" },
                  }}
                >
                  <DoneAllIcon sx={{ color: "#52c41a" }} fontSize="small" />
                </IconButton>

                <IconButton
                  size="small"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    "&:hover": { backgroundColor: "#e0e0e0" },
                  }}
                >
                  <SettingsIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* TABS */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              overflowX: "auto",
              pb: 1,
              pl: 5, // 👈 ADD THIS HERE
            }}
          >
            {tabs.map((t) => {
              const isActive = tab === t.key;

              return (
                <Box
                  key={t.key}
                  onClick={() => setTab(t.key as any)}
                  sx={{
                    flex: "0 0 auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 1.5,
                    py: 0.8,
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "0.2s ease",
                    border: isActive
                      ? "1px solid #ddd"
                      : "1px solid transparent",
                    boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                    {t.label}
                  </Typography>

                  <Box
                    sx={{
                      px: 0.8,
                      py: 0.2,
                      borderRadius: "6px",
                      fontSize: 11,
                      fontWeight: 700,
                      backgroundColor: isActive ? t.color : "#ddd",
                      color: isActive ? "#fff" : "#444",
                    }}
                  >
                    {t.count}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {/* NOTIFICATIONS LIST */}
          <List>
            {notifications.map((item: NotificationItem) => (
              <Box
                key={item.id}
                sx={{
                  p: 1.5,
                  mb: 1,
                  borderRadius: 2,
                  backgroundColor: item.isNew ? "#f6fff8" : "#fff",
                  border: "1px solid #eee",
                  position: "relative",
                }}
              >
                {/* MAIN ROW */}
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  {/* AVATAR */}
                  {/* AVATAR */}
                  <Box
                    component="img"
                    src={item.avatar}
                    alt="avatar"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  {/* CONTENT */}
                  <Box sx={{ flex: 1 }}>
                    {/* TITLE */}
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                      {item.title}
                    </Typography>

                    {/* TYPE + TIME */}
                    <Typography sx={{ fontSize: 12, color: "gray" }}>
                      {item.time} · {item.type}
                    </Typography>

                    {/* TAGS */}
                    {item.tags && item.tags.length > 0 && (
                      <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                        {item.tags.map((tag) => (
                          <Box
                            key={tag}
                            sx={{
                              fontSize: 10,
                              px: 1,
                              py: 0.2,
                              borderRadius: 1,
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* ACTION BUTTONS */}
                    {item.actions && (
                      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            fontSize: 12,
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: 1,
                            cursor: "pointer",
                          }}
                        >
                          Reply
                        </Box>

                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            fontSize: 12,
                            backgroundColor: "#fff",
                            color: "#000",
                            border: "1px solid #ddd",
                            borderRadius: 1,
                            cursor: "pointer",
                          }}
                        >
                          Decline
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* GREEN DOT */}
                {item.isNew && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#52c41a",
                    }}
                  />
                )}
              </Box>
            ))}
          </List>
        </Box>
        {/* FOOTER */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
            p: 1.5,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: 600,
              color: "#1890ff",
              cursor: "pointer",
              borderRadius: 1,
              py: 0.5,

              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            View All Notifications
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NotificationDrawer;
