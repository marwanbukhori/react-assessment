import { useSelector } from "react-redux";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const ScatterPlotChart = () => {
  const data = useSelector((state: any) => state.chart.scatterData);

  return (
    <div className="h-full w-full min-h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis type="number" dataKey="x" name="X" />
          <YAxis type="number" dataKey="y" name="Y" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Data" data={data} fill="hsl(var(--chart-3))" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
