import React from "react";
import Chart from "react-apexcharts";
import { Box, Stack, Typography } from "@mui/material";

const InstalledChart = () => {
  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const series = [
    {
      name: "Asia",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 90, 100, 110],
    },
    {
      name: "Europe",
      data: [60, 70, 80, 90, 85, 95, 100, 120, 130, 140, 150, 160],
    },
    {
      name: "Americas",
      data: [20, 25, 30, 35, 40, 45, 55, 60, 65, 70, 75, 80],
    },
  ];

  const colors = ["#fa8c16", "#1890ff", "#52c41a"];

  const totals = series.map((item) => item.data.reduce((a, b) => a + b, 0));

  return (
    <Box>
      {/* LEGEND (HORIZONTAL KPI STYLE) */}
      <Stack
        direction="row"
        spacing={5}
        sx={{
          justifyContent: "flex-start",
          mb: 1,
        }}
      >
        {series.map((item, index) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              minWidth: 90,
            }}
          >
            {/* TOP: COLOR + LABEL */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: colors[index],
                }}
              />

              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                {item.name}
              </Typography>
            </Box>

            {/* BOTTOM: VALUE */}
            <Typography sx={{ fontSize: 16, fontWeight: 800, ml: 2 }}>
              {(totals[index] / 1000).toFixed(2)}k
            </Typography>
          </Box>
        ))}
      </Stack>

      <Chart
        type="bar"
        height={293} // slightly medium (sweet spot)
        series={series}
        options={{
          chart: {
            stacked: true,
            toolbar: { show: false },
          },

          colors,

          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%", // balanced bars
              borderRadius: 4,
            },
          },

          dataLabels: {
            enabled: false,
          },

          xaxis: {
            categories,
            labels: {
              style: {
                fontSize: "11px",
              },
            },
          },

          yaxis: {
            labels: {
              style: {
                fontSize: "11px",
              },
            },
          },

          legend: {
            show: false,
          },

          grid: {
            strokeDashArray: 3,
          },
        }}
      />
    </Box>
  );
};

export default InstalledChart;
