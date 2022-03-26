import { FC } from "react";
import styled from "styled-components";

interface TemperatureValueProps {
  value: string;
}
const TemperatureValue: FC<TemperatureValueProps> = ({
  value,
}: TemperatureValueProps) => <TemperatureValueH2>{value}º</TemperatureValueH2>;

export default TemperatureValue;

const TemperatureValueH2 = styled.h2`
  font-size: 4rem;
  font-weight: normal;
`;
