import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../style/Navbar.css";

import venkatlogonobg from "../assets/venkatlogonobg.png";

import { FaHome } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { RiChatUploadLine } from "react-icons/ri";
import { TbCalendarUser } from "react-icons/tb";
import { SiDevelopmentcontainers } from "react-icons/si";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <aside className="navbar">

            {/* LOGO */}
            <div className="navbar-logo">
                <img
                    src={venkatlogonobg}
                    alt="Balmoor Venkat"
                />
            </div>

            {/* MENU */}
            <nav className="navbar-menu">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <FaHome />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/voters"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <MdPeople />
                    <span>Voters</span>
                </NavLink>

               <NavLink
  to="/grievances"
  className={({ isActive }) =>
    isActive ? "nav-item active" : "nav-item"
  }
>
  <RiChatUploadLine />
  <span>Grievances</span>
</NavLink>

                <NavLink
                    to="/meetings"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <TbCalendarUser />
                    <span>Meetings</span>
                </NavLink>

                <NavLink
                    to="/developmentworks"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <SiDevelopmentcontainers />
                    <span>Development Works</span>
                </NavLink>

                <NavLink
                    to="/expenses"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <FaMoneyBillWave />
                    <span>Expenses</span>
                </NavLink>

                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <MdAssessment />
                    <span>Reports</span>
                </NavLink>

                <NavLink
                    to="/notifications"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <IoIosNotifications />
                    <span>Notifications</span>
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <FaUserCircle />
                    <span>Profile</span>
                </NavLink>

            </nav>

            {/* LOGOUT */}
            <div className="navbar-bottom">

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    <FiLogOut />
                    <span>Logout</span>
                </button>

            </div>

        </aside>
    );
}

export default Navbar;