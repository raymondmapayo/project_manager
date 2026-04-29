import { useState } from "react";
import Chart from "react-apexcharts";

type Props = {
  data: {
    label: string;
    value: number;
  }[];
  colors: string[];
};

const DownloadDonutChart = ({ data, colors }: Props) => {
  const series = data.map((item) => item.value);
  const labels = data.map((item) => item.label);

  const total = series.reduce((a, b) => a + b, 0);

  const [active, setActive] = useState<{
    label: string;
    value: number;
  } | null>(null);

  return (
    <div
      style={{
        position: "relative",
        width: 320, // ✅ BIGGER CONTAINER
        height: 320, // ✅ BIGGER CONTAINER
      }}
    >
      <Chart
        type="donut"
        width={320} // ✅ MATCH SIZE
        height={320} // ✅ MATCH SIZE
        series={series}
        options={{
          labels,
          colors,

          legend: {
            show: false,
          },

          dataLabels: {
            enabled: false,
          },

          stroke: {
            width: 0,
          },

          tooltip: {
            enabled: true,
            y: {
              formatter: (val: number) => val.toLocaleString(),
            },
          },
          chart: {
            events: {
              dataPointMouseEnter: (_event, _chartContext, config) => {
                if (!config) return;

                const index = config.dataPointIndex;

                if (index === undefined || index < 0) return;

                setActive({
                  label: labels[index],
                  value: series[index],
                });
              },

              dataPointMouseLeave: () => {
                setActive(null);
              },
            },
          },

          plotOptions: {
            pie: {
              donut: {
                size: "65%", // ✅ slightly tighter for better visual balance
              },
            },
          },
        }}
      />

      {/* CENTER TEXT (adjusted for bigger chart) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {active ? (
          <>
            <div style={{ fontSize: 15, color: "#888", fontWeight: 600 }}>
              {active.label}
            </div>

            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              {active.value.toLocaleString()}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 15, color: "#888", fontWeight: 600 }}>
              Total
            </div>

            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              {total.toLocaleString()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DownloadDonutChart;
