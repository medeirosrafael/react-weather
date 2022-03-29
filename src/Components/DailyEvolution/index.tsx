import { FC, useContext, useEffect, useState } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../Contexts/WeatherContext";
import Chart from "./Components/Chart";
import { ChartContainer, Container, ContainerTitle } from "./styles";
import { Props as ApexChartProps } from "react-apexcharts";
import dayjs from "dayjs";

const SERIE_NAME = "Daily Evolution";

const DailyEvolution: FC = () => {
  const { currentHourly } = useContext(WeatherContext) as WeatherContextType;

  const [currentSerie, setCurrentSerie] = useState<ApexChartProps["series"]>([
    { name: SERIE_NAME, data: [] },
  ]);

  const [currentCategories, setCurrentCategories] = useState<string[]>([]);

  useEffect(() => {
    if (currentHourly) {
      setCurrentSerie([
        {
          name: SERIE_NAME,
          data: currentHourly.map(({ temp }) => parseInt(temp.toFixed(0), 10)),
        },
      ]);
      setCurrentCategories(
        currentHourly.map(({ dt, timezone }) =>
          dayjs.unix(dt).tz(timezone).format("HH:mm")
        )
      );
    }

  }, [currentHourly, setCurrentSerie, setCurrentCategories]);

  if (!currentHourly?.length) return null;

  return (
    <Container>
      <ContainerTitle>DAILY EVOLUTION</ContainerTitle>
      <ChartContainer>
        <Chart categories={currentCategories} series={currentSerie} />
      </ChartContainer>
    </Container>
  );
};

export default DailyEvolution;
