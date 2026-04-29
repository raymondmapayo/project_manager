import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MiniChart from "../charts/MiniChart";

/* 🔧 reusable styles */
const cardStyle = {
  borderRadius: "14px",
  background: "#fff",
  border: "1px solid #eee",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyle = {
  fontSize: 17,
  fontWeight: 600,
  color: "#444",
};

const valueStyle = {
  fontSize: 26,
  fontWeight: 700,
  mt: 1,
  color: "#111",
};

const statusRow = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mt: 1,
};

const subText = {
  fontSize: 13,
  color: "#999",
};

const TopStandard = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={2}>
        {/* CARD 1 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              ...cardStyle,
              position: "relative",
              overflow: "hidden",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background: "linear-gradient(90deg, #fa8c16, #1890ff, #52c41a)",
                opacity: 0.7,
              },
            }}
          >
            <CardContent sx={contentStyle}>
              <Box>
                <Typography sx={titleStyle}>Total active users</Typography>

                <Typography sx={valueStyle}>18,765</Typography>

                <Box sx={statusRow}>
                  <TrendingUpIcon sx={{ fontSize: 18, color: "#4caf50" }} />
                  <Typography
                    sx={{ color: "#4caf50", fontSize: 14, fontWeight: 600 }}
                  >
                    +2.6%
                  </Typography>
                  <Typography sx={subText}>last 7 days</Typography>
                </Box>
              </Box>

              <MiniChart color="#00a76f" />
            </CardContent>
          </Card>
        </Grid>

        {/* CARD 2 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              ...cardStyle,
              position: "relative",
              overflow: "hidden",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background: "linear-gradient(90deg, #fa8c16, #1890ff, #52c41a)",
                opacity: 0.7,
              },
            }}
          >
            <CardContent sx={contentStyle}>
              <Box>
                <Typography sx={titleStyle}>Total installed</Typography>

                <Typography sx={valueStyle}>4,876</Typography>

                <Box sx={statusRow}>
                  <TrendingUpIcon sx={{ fontSize: 18, color: "#4caf50" }} />
                  <Typography
                    sx={{ color: "#4caf50", fontSize: 14, fontWeight: 600 }}
                  >
                    +0.2%
                  </Typography>
                  <Typography sx={subText}>last 7 days</Typography>
                </Box>
              </Box>

              <MiniChart color="#2196f3" />
            </CardContent>
          </Card>
        </Grid>

        {/* CARD 3 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              ...cardStyle,
              position: "relative",
              overflow: "hidden",

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background: "linear-gradient(90deg, #fa8c16, #1890ff, #52c41a)",
                opacity: 0.7,
              },
            }}
          >
            <CardContent sx={contentStyle}>
              <Box>
                <Typography sx={titleStyle}>Total downloads</Typography>

                <Typography sx={valueStyle}>678</Typography>

                <Box sx={statusRow}>
                  <TrendingDownIcon sx={{ fontSize: 18, color: "#f44336" }} />
                  <Typography
                    sx={{ color: "#4caf50", fontSize: 14, fontWeight: 600 }}
                  >
                    -0.1%
                  </Typography>
                  <Typography sx={subText}>last 7 days</Typography>
                </Box>
              </Box>

              <MiniChart color="#ff5630" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopStandard;
