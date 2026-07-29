import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const projectData = [
  { name: "Completed", value: 186 },
  { name: "Pending", value: 62 }
];

const COLORS = ["#28a745", "#dc3545"];
function Piereport(){

    return(
        <>
           <div style={{ width: "400px", height: "250px" }}>
      <h3>Project Status</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={projectData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {projectData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
        </>
    )
}export default Piereport;