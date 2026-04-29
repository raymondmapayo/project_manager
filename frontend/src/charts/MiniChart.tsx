import Chart from "react-apexcharts";

type Props = {
  color: string;
};

const MiniChart = ({ color }: Props) => {
  return (
    <Chart
      type="area"
      height={50}
      width={90}
      options={{
        chart: {
          sparkline: { enabled: true }, // keep clean look
        },

        stroke: {
          width: 2,
          curve: "smooth",
        },

        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0,
          },
        },

        colors: [color],

        tooltip: {
          enabled: true,
          theme: "dark",
          x: {
            show: true,
          },
          y: {
            formatter: (val: number) => `${val}`,
          },
        },

        // ✅ ADD X LABELS (this is the key change)
        xaxis: {
          categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: {
            show: true,
            style: {
              colors: "#999",
              fontSize: "9px",
            },
          },
        },

        // optional: light y labels (can remove if too much)
        yaxis: {
          labels: {
            show: false,
          },
        },

        grid: {
          show: false, // keep minimal look
        },

        markers: {
          size: 0,
        },
      }}
      series={[
        {
          data: [10, 20, 15, 30, 25, 40, 35],
        },
      ]}
    />
  );
};

export default MiniChart;
