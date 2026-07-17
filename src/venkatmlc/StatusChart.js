import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import '../style/statusChart.css';

const data = [
  { name: "Resolved", value: 80 },
  { name: "In Progress", value: 20 },
];

const COLORS = ["#28a745", "#ffc107"];

function StatusChart() {
  return (
 
  <div className="chart-card">
    <h3 className="chart-title">Grievances Overview</h3>

    <div className="chart-container">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="40%"
            
            outerRadius={30}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);
}

export default StatusChart;