import { Box, Card, Typography, Stack } from "@mui/material";
import DownloadDonutChart from "../charts/DownloadPieChart";

const data = [
  { label: "Mac", value: 35 },
  { label: "Windows", value: 25 },
  { label: "iOS", value: 20 },
  { label: "Android", value: 20 },
];

const colors = ["#fa8c16", "#1890ff", "#52c41a", "#722ed1"];

const CurrentDownload = () => {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* HEADER */}
      <Box sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
          Current download
        </Typography>

        <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
          Downloaded by operating system
        </Typography>
      </Box>

      {/* DONUT CHART */}
      <DownloadDonutChart data={data} colors={colors} />

      {/* LEGEND (ONLY LABELS) */}
      <Stack
        direction="row"
        spacing={3}
        sx={{
          mt: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={item.label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: colors[index],
              }}
            />
            <Typography sx={{ fontSize: 14 }}>{item.label}</Typography>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default CurrentDownload;
