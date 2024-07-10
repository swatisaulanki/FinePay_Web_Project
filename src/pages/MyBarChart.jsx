import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "First",
    January: 40000,
    February: 24000,
    March: 28000,

    amt: 24000,
  },
  {
    name: "Second",
    January: 30000,
    February: 13980,
    March: 24000,

    amt: 22100,
  },
  {
    name: "Third",
    January: 20000,
    February: 98000,
    March: 24000,

    amt: 22900,
  },
  {
    name: "Fourth",
    January: 27800,
    February: 39080,
    March: 24000,

    amt: 20000,
  },
  {
    name: "Fifth",
    January: 18900,
    February: 48000,
    March: 24000,
    amt: 21810,
  },
  {
    name: "Six",
    January: 23900,
    February: 38000,
    March: 24000,

    amt: 25000,
  },
  {
    name: "Seven",
    January: 34900,
    February: 43000,
    March: 24000,

    amt: 21000,
  },
];

const MyBarChart = () => {
  return (
    <div className="charts">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="January" fill="#8884d8" />
          <Bar dataKey="February" fill="#82ca9d" />
          <Bar dataKey="March" fill="#FF6347" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
