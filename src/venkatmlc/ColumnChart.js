import React from "react";
import "../style/ColumnChart.css"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ColumnChart(){

  const data = [
    { month: "Jan", grievances: 25 },
    { month: "Feb", grievances: 40 },
    { month: "Mar", grievances: 35 },
    { month: "Apr", grievances: 50 },
    { month: "May", grievances: 30 },
    { month: "Jun", grievances: 45 },
  ];

  const COLORS = [
    "#4CAF50",
    "#2196F3",
    "#FFC107",
    "#F44336",
    "#9C27B0",
    "#00BCD4",
  ];

  return (
    <>
    <div className="column-card">
      <h3 className="chart-title">Development Work status</h3>

      <div className="chart-box">
        <ResponsiveContainer width="70%" height="60%">
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="grievances" barSize={20}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    </>
  )

}export default ColumnChart;