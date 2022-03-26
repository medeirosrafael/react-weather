import { FC } from "react";
import Chart from "./Components/Chart";
import { ChartContainer, Container, ContainerTitle } from "./styles";

const DailyEvolution: FC = () => {
  return (
    <Container>
      <ContainerTitle>DAILY EVOLUTION</ContainerTitle>
      <ChartContainer>
        <Chart />
      </ChartContainer>
    </Container>
  );
};

export default DailyEvolution;
