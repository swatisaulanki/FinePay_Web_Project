import React from 'react'
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
      Sell: 24000,
      Gst: 28000,
  
      amt: 24000,
    },
    {
      name: "Februay",
      Investment: 30000,
      Sell: 13980,
      Gst: 24000,
  
      amt: 22100,
    },
    {
      name: "March",
      Investment: 20000,
      Sell: 98000,
      Gst: 24000,
  
      amt: 22900,
    },
    
  ];
  
const DigitalByCharts = () => {
  return (
    <div className="charts">
    <ResponsiveContainer   width="85%" height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
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
        <Bar dataKey="Sell" fill="#82ca9d" />
        <Bar dataKey="Gst" fill="#FF6347" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  )
}

export default DigitalByCharts
