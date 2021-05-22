import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 100, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 1400, pv: 2400, amt: 2400 },
];

const Chart = () => {
  return (
    <BarChart width={500} height={250} data={data}>
      <XAxis dataKey="name" stroke=" #5AD6B0" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill=" #5AD6B0" barSize={30} />
    </BarChart>
  );
};
export default Chart;
