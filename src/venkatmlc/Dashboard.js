import React from "react";
import Navbar from "./Navbar";
import "../style/Dashboard.css";

import { FaBars } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

import StatusChart from "./StatusChart";
import ColumnChart from "./ColumnChart";
import Upcoming from "./Upcoming";

function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* ================= SIDEBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="dashboard-main">

        {/* ================= HEADER ================= */}
        <div className="dashboard-header">

          <button className="menu-btn" type="button">
            <FaBars />
          </button>

          <div className="welcome-section">

            <div>
              <h3>
                Welcome back, MLC Balmoor Venkat Reddy
              </h3>

              <p>
                Here's what's happening in your constituency
              </p>
            </div>

            <input
              type="date"
              className="dashboard-date"
            />

          </div>

        </div>

        {/* ================= SUMMARY CARDS ================= */}
        <div className="dashboard-cards">

          {/* Card 1 */}
          <div className="dashboard-card card-voters">

            <div className="card-icon">
              <BsPeopleFill />
            </div>

            <div className="card-content">

              <h2>12,843</h2>

              <p>Total Voters</p>

              <div className="card-link">
                <span>View Details</span>
                <FaArrowRightLong />
              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div className="dashboard-card card-grievances">

            <div className="card-icon">
              <BsPeopleFill />
            </div>

            <div className="card-content">

              <h2>156</h2>

              <p>Grievances</p>

              <div className="card-link">
                <span>View Details</span>
                <FaArrowRightLong />
              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="dashboard-card card-meetings">

            <div className="card-icon">
              <BsPeopleFill />
            </div>

            <div className="card-content">

              <h2>24</h2>

              <p>Meetings</p>

              <div className="card-link">
                <span>View Details</span>
                <FaArrowRightLong />
              </div>

            </div>

          </div>

          {/* Card 4 */}
          <div className="dashboard-card card-development">

            <div className="card-icon">
              <BsPeopleFill />
            </div>

            <div className="card-content">

              <h2>24</h2>

              <p>Development Works</p>

              <div className="card-link">
                <span>View Details</span>
                <FaArrowRightLong />
              </div>

            </div>

          </div>

        </div>

        {/* ================= CHARTS ================= */}
        <div className="dashboard-charts">

          <div className="status-chart-box">
            <StatusChart />
          </div>

          <div className="column-chart-box">
            <ColumnChart />
          </div>

        </div>

        {/* ================= UPCOMING ================= */}
        <div className="upcoming-section">
          <Upcoming />
        </div>

      </main>

    </div>
  );
}

export default Dashboard;