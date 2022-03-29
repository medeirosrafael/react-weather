export interface TemperatureUnitInterface {
  type: string;
  label: string;
  helperText: string;
}

const TEMPERATURE_UNITS: TemperatureUnitInterface[] = [
  {
    type: "metric",
    label: "C",
    helperText: "Change temperature to Celsius",
  },
  {
    type: "imperial",
    label: "F",
    helperText: "Change temperature to Fahrenheit",
  },
];

const DEFAULT_UNIT: TemperatureUnitInterface = TEMPERATURE_UNITS[0];

export { DEFAULT_UNIT };

export default TEMPERATURE_UNITS;
