import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const expenseData = [
  { month: "Jan", expense: 120000 },
  { month: "Feb", expense: 180000 },
  { month: "Mar", expense: 150000 },
  { month: "Apr", expense: 220000 },
  { month: "May", expense: 190000 },
  { month: "Jun", expense: 250000 }
];

function Barreport(){
    return(
        <>
         <div style={{  width: "400px", height: "250px" }}>
      <h3>Monthly Reports</h3>

      <ResponsiveContainer>
        <BarChart data={expenseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="expense" fill="#0B5ED7" />
        </BarChart>
      </ResponsiveContainer>
    </div>
        </>
    )
}export default Barreport;