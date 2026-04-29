import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Welcome from "../module/Welcome";
import FeaturerApp from "../module/FeaturerApp";
import TopStandard from "../module/TopStandard";
import CurrentDownload from "../module/CurrentDownload";
import Installed from "../module/Installed";
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {/* RIGHT ILLUSTRATION */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Welcome />
        </Grid>
        {/* LEFT / EMPTY CONTENT */}
        <Grid size={{ xs: 12, md: 4 }}>
          <FeaturerApp />
        </Grid>
        {/* 🔥 BOTTOM FULL WIDTH STATS */}
        <Grid size={{ xs: 12 }}>
          <TopStandard />
        </Grid>
        {/* 🔥 BOTTOM FULL WIDTH STATS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <CurrentDownload />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Installed />
        </Grid>

        {/* OPTIONAL ROWS */}
        <Grid size={{ xs: 12, md: 4 }} />
        <Grid size={{ xs: 12, md: 8 }} />
      </Grid>
    </Box>
  );
}
