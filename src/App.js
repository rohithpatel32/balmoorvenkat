import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./venkatmlc/Login";
import Dashboard from "./venkatmlc/Dashboard";
import Voters from "./venkatmlc/Voters";
import Developmentworks from "./venkatmlc/Developmentworks";
import Adddevelopmentwork from "./venkatmlc/Adddevelopmentwork";
import Expenses from "./venkatmlc/Expenses";
import Reports from "./venkatmlc/Reports";
import Meetings from "./venkatmlc/Meetings";
import Notifications from "./venkatmlc/Notifications";
import Grievances from "./venkatmlc/Grievances";
import Profile from "./venkatmlc/Profile";
// import Complaint from "./venkatmlc/Complaint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/voters" element={<Voters />} />
        <Route
          path="/developmentworks"
          element={<Developmentworks />}
        />
        <Route
          path="/Adddevelopmentwork"
          element={<Adddevelopmentwork />}
        />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Grievances */}
        <Route path="/grievances" element={<Grievances />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Complaint */}
        {/* <Route path="/complaint" element={<Complaint />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;