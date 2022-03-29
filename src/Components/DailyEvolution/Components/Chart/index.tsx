import { FC } from "react";
import ReactApexChart, { Props as ApexChartProps } from "react-apexcharts";

const CHART_TYPE: ApexChartProps["type"] = "line";
const WIDTH: number = 800;
const HEIGHT: number = 300;

const Chart: FC<ChartProps> = ({ series, categories }) => {
  return (
    <ReactApexChart
      options={{
        ...options,
        ...{ xaxis: { ...options.xaxis, categories } },
      }}
      series={series}
      type={CHART_TYPE}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

interface ChartProps {
  series: ApexChartProps["series"];
  categories: string[];
}

const options: ApexChartProps = {
  stroke: { curve: "smooth" },
  markers: { size: 6, strokeWidth: undefined },
  xaxis: {
    categories: [],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#FFF", fontSize: "1rem" } },
    offsetX: 10,
  },
  yaxis: {
    show: false,
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
