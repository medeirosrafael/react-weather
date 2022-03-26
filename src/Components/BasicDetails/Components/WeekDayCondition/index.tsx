import { FC } from "react";
import styled from "styled-components";

interface WeekDayClimateProps {
  day: string;
  condition: string;
}
const WeekDayClimate: FC<WeekDayClimateProps> = ({
  day,
  condition,
}: WeekDayClimateProps) => (
  <Text>
    {day}, {condition}
  </Text>
);

export default WeekDayClimate;

const Text = styled.p`
  color: #fff;
  font-weight: bold;
`;
