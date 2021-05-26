import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  //   Legend,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "Jerry", views: 400, pv: 2400, amt: 400 },
  { name: "Veronica", views: 100, pv: 2400, amt: 400 },
  { name: "Sussan", views: 200, pv: 2400, amt: 400 },
  { name: "John", views: 300, pv: 2400, amt: 400 },
  { name: "Henry", views: 1400, pv: 2400, amt: 400 },
  { name: "Olumide", views: 1000, pv: 400, amt: 100 },
];

const styler = {
  marginLeft: "-50px",
  marginTop: "-20px",
};

const Chart = () => {
  return (
    <div style={styler}>
      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="name" stroke="#5AD6B0" />
        <YAxis />
        <Tooltip />

        <CartesianGrid vertical={false} stroke="#DDE9FB" />
        <Bar dataKey="views" fill=" #5AD6B0" barSize={30} />
      </BarChart>
    </div>
  );
};
export default Chart;
