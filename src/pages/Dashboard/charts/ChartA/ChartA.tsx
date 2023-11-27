import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltipProps } from "../../types";
import { StyledTooltipContainer } from "../../styles";

const formatDateWithoutTime = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${day}.${month}.${year}`;
};

const AREA_1_DATA_KEY = "покупка";
const AREA_2_DATA_KEY = "продажа";

const generateData = () => {
  const data = [];

  for (let i = 1; i <= 30; i++) {
    data.push({
      x: i,
      [AREA_1_DATA_KEY]: Math.floor(Math.random() * (400 - 300 + 1) + 400),
      [AREA_2_DATA_KEY]: Math.floor(Math.random() * (500 - 300 + 1) + 300),
    });
  }

  return data;
};

const DATA = generateData();
const TODAY = formatDateWithoutTime(new Date());

const TICK = {
  fontSize: 10,
  fontFamily: "Roboto",
  fill: "#969696",
};

const CustomTooltip = (props: CustomTooltipProps) => {
  const { active, payload } = props;

  if (active) {
    return (
      <StyledTooltipContainer>
        <div className="custom-tooltip-label">{TODAY}</div>

        <div className="custom-tooltip-entries">
          <div className="custom-tooltip-entry">
            <div className="custom-tooltip-entry-name custom-tooltip-entry-name--green">
              {payload?.[0].name}
            </div>
            <div className="custom-tooltip-entry-value">
              {payload?.[0].value}₸
            </div>
          </div>

          <div className="custom-tooltip-entry">
            <div> </div>
            <div>$</div>
          </div>

          <div className="custom-tooltip-entry">
            <div className="custom-tooltip-entry-name custom-tooltip-entry-name--red">
              {payload?.[1].name}
            </div>
            <div className="custom-tooltip-entry-value">
              {payload?.[1].value}₸
            </div>
          </div>
        </div>
      </StyledTooltipContainer>
    );
  }

  return null;
};

export const ChartA = () => {
  return (
    <ResponsiveContainer width="100%" height={271}>
      <AreaChart
        data={DATA}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="x"
          type="number"
          ticks={DATA.map((entry) => entry.x)}
          tick={TICK}
          domain={["dataMin", "dataMax"]}
        />
        <YAxis tick={TICK} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={(props) => <CustomTooltip {...props} />} />
        <Area
          type="monotone"
          dataKey={AREA_1_DATA_KEY}
          stroke="red"
          fill="#DEEDFA"
        />
        <Area
          type="monotone"
          dataKey={AREA_2_DATA_KEY}
          stroke="green"
          fill="#A9B7D7"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
