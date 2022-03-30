import { FC } from "react";
import styled from "styled-components";

const TemperatureValue: FC<TemperatureValueProps> = ({ value }) => (
  <TemperatureValueH2>{value}º</TemperatureValueH2>
);

export default TemperatureValue;
interface TemperatureValueProps {
  value: string;
}
const TemperatureValueH2 = styled.h2`
  font-size: 4rem;
  font-weight: normal;
`;
