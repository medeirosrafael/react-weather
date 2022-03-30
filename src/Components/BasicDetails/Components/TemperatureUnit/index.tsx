import { FC } from "react";
import styled from "styled-components";
import { TemperatureUnitInterface } from "../../../../Services/TemperatureUnits";

const TemperatureUnit: FC<TemperatureUnitProps> = ({
  selected,
  unit,
  onClick,
}) => (
  <TemperatureButton
    title={unit?.helperText}
    selected={selected}
    onClick={() => onClick(unit)}
  >
    {unit?.label}
  </TemperatureButton>
);

export default TemperatureUnit;

export interface TemperatureUnitProps extends TemperatureOptionProps {
  unit: TemperatureUnitInterface;
  onClick: (unit: TemperatureUnitInterface) => void;
  selected: boolean;
}

interface TemperatureOptionProps {
  selected?: boolean;
}

const TemperatureButton = styled.button<TemperatureOptionProps>`
  font-size: 1rem;
  background: linear-gradient(
    0deg,
    rgba(196, 196, 196, 0.2) -79.96%,
    rgba(196, 196, 196, 0.0877044) 6.86%,
    rgba(196, 196, 196, 0) 78.31%
  );
  padding: 0.5rem;
  border: ${(props: TemperatureOptionProps) =>
    props.selected ? "1px solid" : "0"};
  border-radius: 5px;
  color: #f48403;
  font-weight: bold;
  cursor: pointer;
`;
