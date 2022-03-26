import { FC } from "react";
import styled from "styled-components";

const CityNameH3 = styled.h3`
  color: #fff;
`;

interface CityNameProps {
  city: string;
}

const CityName: FC<CityNameProps> = ({ city }: CityNameProps) => (
  <CityNameH3>{city}</CityNameH3>
);

export default CityName;
