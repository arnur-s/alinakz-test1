import { Icon } from "src/components/Icon";
import { StyledTypography, StyledDivRow } from "./styles";
import { DummySelectProps } from "./types";
import ChevronDownIcon from "assets/icons/chevron-down.svg";

export const DummySelect = (props: DummySelectProps) => (
  <StyledDivRow>
    <StyledTypography>{props.name}</StyledTypography>
    <Icon src={ChevronDownIcon} alt="шеврон" />
  </StyledDivRow>
);
