import { FC } from "react";
import ReactApexChart, { Props as ApexChartProps } from "react-apexcharts";

const CHART_TYPE: ApexChartProps["type"] = "line";
const WIDTH: number = 800;
const HEIGHT: number = 300;
const Chart: FC = () => {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type={CHART_TYPE}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

const series: ApexChartProps["series"] = [
  {
    name: "Daily Evolution",
    data: [30, 40, 25, 50, 49, 21],
  },
];

const options: ApexChartProps = {
  stroke: { curve: "smooth" },
  markers: { size: 6, strokeWidth: undefined },
  xaxis: {
    categories: ["08:00", "11:00", "14:00", "17:00", "20:00", "23:00"],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#FFF", fontSize: "1rem" } },
    offsetX: 10,
  },
  yaxis: {
    show: false,
    // labels: {
    //   style: {
    //     colors: "#FFF",
    //     fontSize: "1rem",
    //   },
    //   formatter: (value) => `${value}º`,
    //   offsetX: -15,
    // },
  },
  grid: { show: false },
  dataLabels: {
    enabled: true,
    background: {
      borderColor: undefined,
      enabled: false,
      dropShadow: { enabled: false },
    },
    offsetY: -7,
    formatter: (value: string) => `${value}º`,
  },
  colors: ["#F48403"],
  chart: {
    toolbar: { show: false },
  },
};

export default Chart;
