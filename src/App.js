import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./venkatmlc/Navbar";
import Voters from "./venkatmlc/Voters";
import Developmentworks from "./venkatmlc/Developmentworks";
import Adddevelopmentwork from "./venkatmlc/Adddevelopmentwork";
import Expenses from "./venkatmlc/Expenses";
import Reports from "./venkatmlc/Reports";
import Meetings from "./venkatmlc/Meetings";
import Notifications from "./venkatmlc/Notifications";
import Grivances from "./venkatmlc/Grivances";
import React from "react";
import Profile from "./venkatmlc/Profile";
// import Logout from "./venkatmlc/Login";
import Dashboard from "./venkatmlc/Dashboard";
import Login from "./venkatmlc/Login";
// import Login from "./venkatmlc/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes> <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/voters" element={<Voters />} />
          <Route path="/developmentworks" element={<Developmentworks />} />
          <Route path="/Adddevelopmentwork" element={<Adddevelopmentwork />} />
          <Route path="/Expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/grivances" element={<Grivances />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
} export default App; 