import { FC } from "react";
import { Oval } from "react-loading-icons";

const LoadingIcon: FC<LoadingIconProps> = ({
  width = 10,
  height = 10,
}: LoadingIconProps) => {
  return (
    <Oval
      width={width}
      height={height}
      style={{ marginRight: "1rem" }}
      strokeWidth={36}
      stroke="#F48403"
    />
  );
};
export interface LoadingIconProps {
  width?: number;
  height?: number;
}

export default LoadingIcon;
