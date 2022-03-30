import { FC } from "react";
import styled from "styled-components";

const WeekDayClimate: FC<WeekDayClimateProps> = ({ day, condition }) => (
  <Text>
    {day}, {condition}
  </Text>
);

export default WeekDayClimate;

interface WeekDayClimateProps {
  day: string;
  condition: string;
}
const Text = styled.p`
  color: #fff;
  font-weight: bold;
`;
