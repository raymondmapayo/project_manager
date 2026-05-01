import {
  Box,
  Typography,
  TextField,
  Grid,
  Stack,
  Switch,
  Button,
  Avatar,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const Profile = () => {
  return (
    <Box>
      {/* HEADER */}
      <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 3 }}>
        Profile Settings
      </Typography>

      {/* ===================== */}
      {/* MAIN GRID WRAPPER */}
      {/* ===================== */}
      <Grid container spacing={3}>
        {/* ===================== */}
        {/* LEFT CARD */}
        {/* ===================== */}
        <Grid size={{ xs: 12, md: 5 }}>
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
            {/* STACK CONTENT */}
            <Stack spacing={3} sx={{ flex: 1 }}>
              {/* AVATAR */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/150?img=12"
                  sx={{ width: 90, height: 90 }}
                />

                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: "gray" }}>
                    max size of 3 Mb
                  </Typography>
                </Box>
              </Box>

              {/* BANNED */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Banned</Typography>
                  <Typography sx={{ fontSize: 13, color: "gray" }}>
                    Apply disable account
                  </Typography>
                </Box>

                <Switch />
              </Box>

              {/* EMAIL VERIFIED */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Email verified
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: "gray" }}>
                    Disabling this will automatically send the user a
                    verification email
                  </Typography>
                </Box>

                <Switch defaultChecked />
              </Box>
            </Stack>

            {/* DELETE BUTTON BOTTOM */}
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              fullWidth
              sx={{ mt: 3 }}
            >
              Delete Account
            </Button>
          </Box>
        </Grid>

        {/* RIGHT CARD */}
        <Grid size={{ xs: 12, md: 7 }}>
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
            {/* FORM GRID (2 COLUMN LAYOUT) */}
            <Grid container spacing={2} sx={{ flex: 1 }}>
              {/* ROW 1 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Full name"
                  defaultValue="Raymond Morse"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email address"
                  defaultValue="benny89@yahoo.com"
                />
              </Grid>

              {/* ROW 2 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Phone number"
                  defaultValue="08-12 34 56"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Country"
                  defaultValue="SE - Sweden"
                />
              </Grid>

              {/* ROW 3 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="State/region"
                  defaultValue="Virginia"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="City"
                  defaultValue="Rancho Cordova"
                />
              </Grid>

              {/* ROW 4 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Address"
                  defaultValue="908 Jack Locks"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Zip/code" defaultValue="85807" />
              </Grid>

              {/* ROW 5 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Company"
                  defaultValue="Wuckert Inc"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Role"
                  defaultValue="Content Creator"
                />
              </Grid>
            </Grid>

            {/* SAVE BUTTON */}
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                borderColor: "#000",
                color: "#000",
                fontWeight: 600,
                alignSelf: "flex-end",
                px: 3,
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
