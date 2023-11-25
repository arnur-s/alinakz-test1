import { IconProps } from "./types";
import { StyledImg } from "./styles";

export const Icon = (props: IconProps) => {
  return <StyledImg src={props.src} alt={props.alt} />;
};
