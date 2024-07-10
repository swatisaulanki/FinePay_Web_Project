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
    name: "January",
    Investment: 40000,
    Return: 24000,
    User: 28000,

    amt: 24000,
  },
  {
    name: "Februay",
    Investment: 30000,
    Return: 13980,
    User: 24000,

    amt: 22100,
  },
  {
    name: "March",
    Investment: 20000,
    Return: 98000,
    User: 24000,

    amt: 22900,
  },
  
];

const MyBarChart = () => {
  return (
    <div className="charts">
  <ResponsiveContainer   width="85%" height={350} >
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
      <Bar dataKey="Investment" fill="#8884d8" />
      <Bar dataKey="Return" fill="#82ca9d" />
      <Bar dataKey="User" fill="#FF6347" />
    </BarChart>
  </ResponsiveContainer>
</div>

  );
};

export default MyBarChart;
