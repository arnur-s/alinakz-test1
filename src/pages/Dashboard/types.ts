import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

export type DummySelectProps = {
  name: string;
};

export type CustomTooltipProps = TooltipProps<ValueType, NameType>;
