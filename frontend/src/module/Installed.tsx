import { Box, Card, Typography } from "@mui/material";
import InstalledChart from "../charts/InstalledChart";

const Installed = () => {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      {/* HEADER */}
      <Box sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontSize: 20, // ↑ from 18
            fontWeight: 800, // ↑ stronger emphasis
            lineHeight: 1.2,
          }}
        >
          Area installed
        </Typography>

        <Typography
          sx={{
            fontSize: 14, // ↑ from 13
            color: "text.secondary",
            mt: 0.5,
          }}
        >
          (+43%) than last year
        </Typography>
      </Box>

      {/* CHART (LEGEND IS INSIDE CHART NOW) */}
      <InstalledChart />
    </Card>
  );
};

export default Installed;
