import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const SalesAreaChart = () => {
  const data = useSelector((state: any) => state.chart.areaChartData);

  return (
    <div className="h-full w-full min-h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="hsl(var(--chart-1))"
            fill="hsl(var(--chart-1)/0.2)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2)/0.2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
