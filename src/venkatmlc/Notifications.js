import React, { useState } from "react";
import "../style/Notifications.css";

import { LuPlus } from "react-icons/lu";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import Navbar from "./Navbar";

function Notifications() {
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("all");
    const [status, setStatus] = useState("all");

    const notifications = [
        {
            id: 1,
            title: "Meeting Reminder",
            message: "Village meeting tomorrow at 10:30 AM",
            date: "10-July-2026",
            priority: "High",
            status: "Unread",
        },
        {
            id: 2,
            title: "Expense Approved",
            message: "Road Construction Payment Approved",
            date: "15-June-2026",
            priority: "Medium",
            status: "Read",
        },
        {
            id: 3,
            title: "New Grievance",
            message: "Water Supply Complaint Received",
            date: "17-July-2026",
            priority: "High",
            status: "Unread",
        },
        {
            id: 4,
            title: "Project Completed",
            message: "Street light installation completed",
            date: "20-July-2026",
            priority: "Low",
            status: "Read",
        },
        {
            id: 5,
            title: "New Voter Registered",
            message: "One new voter added successfully",
            date: "23-July-2026",
            priority: "Medium",
            status: "Unread",
        },
    ];

    const filteredNotifications = notifications.filter((item) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
            item.title.toLowerCase().includes(searchText) ||
            item.message.toLowerCase().includes(searchText);

        const matchesPriority =
            priority === "all" ||
            item.priority.toLowerCase() === priority;

        const matchesStatus =
            status === "all" ||
            item.status.toLowerCase() === status;

        return matchesSearch && matchesPriority && matchesStatus;
    });

    const totalNotifications = notifications.length;

    const unreadCount = notifications.filter(
        (item) => item.status === "Unread"
    ).length;

    const readCount = notifications.filter(
        (item) => item.status === "Read"
    ).length;

    return (
        <div className="notifications-page">

            <Navbar />

            <main className="notification-content">

                {/* HEADER */}
                <div className="notification-header">

                    <div>
                        <h2>Notifications</h2>
                        <p>Manage all your notifications</p>
                    </div>

                    <button className="new-notification-btn">
                        <LuPlus />
                        New Notification
                    </button>

                </div>

                {/* SEARCH AND FILTER */}
                <div className="notification-filters">

                    <input
                        type="text"
                        placeholder="Search notifications"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="all">All Priorities</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                    </select>

                </div>

                {/* STATISTICS */}
                <div className="notification-stats">

                    <div className="stat-card">
                        <IoIosNotifications className="stat-icon" />

                        <span>Total Notifications</span>

                        <h2>{totalNotifications}</h2>
                    </div>

                    <div className="stat-card">
                        <IoIosNotifications className="stat-icon" />

                        <span>Unread</span>

                        <h2>{unreadCount}</h2>
                    </div>

                    <div className="stat-card">
                        <IoIosNotifications className="stat-icon" />

                        <span>Read</span>

                        <h2>{readCount}</h2>
                    </div>

                </div>

                {/* TABLE */}
                <div className="notification-table-wrapper">

                    <table className="notification-table">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredNotifications.length > 0 ? (

                                filteredNotifications.map((item) => (

                                    <tr key={item.id}>

                                        <td>{item.id}</td>

                                        <td className="notification-title">
                                            {item.title}
                                        </td>

                                        <td className="notification-message">
                                            {item.message}
                                        </td>

                                        <td>{item.date}</td>

                                        <td>
                                            <span
                                                className={`priority-badge ${item.priority.toLowerCase()}`}
                                            >
                                                {item.priority}
                                            </span>
                                        </td>

                                        <td>
                                            <span
                                                className={`status-badge ${item.status.toLowerCase()}`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>

                                        <td>

                                            <div className="action-buttons">

                                                <button
                                                    className="view-btn"
                                                    title="View"
                                                >
                                                    <FaEye />
                                                </button>

                                                <button
                                                    className="edit-btn"
                                                    title="Edit"
                                                >
                                                    <FaEdit />
                                                </button>

                                                <button
                                                    className="delete-btn"
                                                    title="Delete"
                                                >
                                                    <MdOutlineDelete />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td
                                        colSpan="7"
                                        className="no-data"
                                    >
                                        No notifications found
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    );
}

export default Notifications;