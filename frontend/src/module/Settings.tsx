import {
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
  Switch,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const Settings = () => {
  const [newOrder, setNewOrder] = useState(true);
  const [membershipApproval, setMembershipApproval] = useState(false);
  const isLocked = true;
  return (
    <Box>
      {/* HEADER */}
      <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 3 }}>
        Account Settings
      </Typography>

      {/* ===================== */}
      {/* MAIN GRID */}
      {/* ===================== */}
      <Grid container spacing={3}>
        {/* ===================== */}
        {/* LEFT SIDE */}
        {/* ===================== */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            {/* ===================== */}
            {/* CARD 1: EMAIL SETTINGS */}
            {/* ===================== */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                Email Settings
              </Typography>

              <Typography sx={{ fontSize: 13, color: "gray", mt: 1 }}>
                Setup Email Notification
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Email Notification</Typography>
                  <Switch />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Send Copy To Personal Email</Typography>
                  <Switch />
                </Box>
              </Stack>
            </Box>
            {/* ===================== */}
            {/* CARD 2: SYSTEM NOTIFICATION */}
            {/* ===================== */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                Updates from System Notification
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>
                Email you with?
              </Typography>

              <Stack spacing={1.5}>
                {/* ITEM 1 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    News about PCT-themes products and feature updates
                  </Typography>
                  <Checkbox />
                </Box>

                {/* ITEM 2 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    Tips on getting more out of PCT-themes
                  </Typography>
                  <Checkbox />
                </Box>

                {/* ITEM 3 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    Things you missed since you last logged into PCT-themes
                  </Typography>
                  <Checkbox />
                </Box>

                {/* ITEM 4 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    News about products and other services
                  </Typography>
                  <Checkbox />
                </Box>

                {/* ITEM 5 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Tips and Document business products</Typography>
                  <Checkbox />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* ===================== */}
        {/* RIGHT SIDE */}
        {/* ===================== */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              p: 3,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack spacing={3} sx={{ flex: 1 }}>
              {/* HEADER */}
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                Activity Related Emails
              </Typography>

              <Divider />

              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                When to email?
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Have new notifications</Typography>
                <Switch />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>You're sent a direct message</Typography>
                <Switch />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Someone adds you as a connection</Typography>
                <Switch />
              </Box>

              <Divider />

              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                When to escalate emails?
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: isLocked ? 0.5 : 1,
                }}
              >
                <Typography sx={{ opacity: 0.5 }}>Upon new order</Typography>

                <Switch
                  checked={newOrder}
                  disabled={isLocked}
                  onChange={() => setNewOrder(!newOrder)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: 0.5,
                }}
              >
                <Typography sx={{ opacity: 0.5 }}>
                  New membership approval
                </Typography>

                <Switch
                  checked={membershipApproval}
                  disabled
                  onChange={() => setMembershipApproval(!membershipApproval)}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Member registration</Typography>
                <Switch />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
