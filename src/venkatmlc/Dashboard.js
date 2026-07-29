import React from "react";
import "../style/Dashboard.css";
import { FaBars } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import StatusChart from "./StatusChart";
import ColumnChart from "./ColumnChart";
import Upcoming from "./Upcoming";



function Dashboard() {
  return (
    <div className="mlc1">
      <div className="hp">
      <button className="menu-btn">
        <FaBars />
      </button>

      <div className="mlc3">
        <div className="mlc2">
        <h3  className="pad1">
          Welcome back, MLC Balmoor Venkat Reddy
        </h3>
        <p className="blmr1">Here's What's happening in your constituency</p>
        </div>

        <input type="date" className="td" />
      </div>

      <div className="orange">

        {/* Card 1 */}
        <div className="mlc4">
          <div className="icon1">
            <BsPeopleFill />
          </div>

          <div className="mlc5">
            <h2>12,843</h2>
            <p>Total Voters</p>

            <div className="icon2">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>

              <FaArrowRightLong />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mlc6">
          <div className="icon3">
            <BsPeopleFill />
          </div>

          <div className="mlc7">
            <h2>156</h2>
            <p>Grievances</p>

            <div className="icon4">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>

              <FaArrowRightLong />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="mlc8">
          <div className="icon5">
            <BsPeopleFill />
          </div>

          <div className="mlc9">
            <h2>24</h2>
            <p>Meetings</p>

            <div className="icon6">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>

              <FaArrowRightLong />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="mlc10">
          <div className="icon7">
            <BsPeopleFill />
          </div>

          <div className="mlc11">
            <h2>24</h2>
            <p>Meetings</p>

            <div className="icon8">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>

              <FaArrowRightLong />
            </div>
          </div>
        </div>

      </div>

      <div className="chart">

      

      <StatusChart />
      <ColumnChart/>
      </div>
      <div>
      <Upcoming/>
      </div>
      
              
       </div>      

    </div>
  );
}

export default Dashboard;