import React, { useState } from "react";
import "../style/Meetings.css";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";
import Navbar from "./Navbar";

function Meetings() {

    // Upcoming meetings
    const [upcomingMeetings, setUpcomingMeetings] = useState([
        {
            id: 1,
            title: "Daily Meetings",
            date: "July 24, 11:30am - 12:30pm",
            joined: "+5 others joined",
            link: "https://google.com",
            typeLink: "https://example.com"
        },
        {
            id: 2,
            title: "Public Meetings",
            date: "August 01, 10:30am - 02:30pm",
            joined: "+45 others joined",
            link: "https://google.com",
            typeLink: "https://example.com"
        },
        {
            id: 3,
            title: "MLC'S Meeting",
            date: "July 30, 04:30pm - 06:30pm",
            joined: "+99 others joined",
            link: "https://google.com",
            typeLink: "https://example.com"
        }
    ]);

    // History meetings
    const [historyMeetings] = useState([
        {
            id: 101,
            dateStr: "Nov 10",
            title: "Agenda Review",
            time: "02:30pm - 03:30pm",
            meetLink: "https://example.com",
            dailyLink: "https://example.com"
        },
        {
            id: 102,
            dateStr: "Nov 10",
            title: "Roadissues Review",
            time: "10:30am - 12:00pm",
            meetLink: "https://example.com",
            dailyLink: "https://example.com"
        },
        {
            id: 103,
            dateStr: "Nov 10",
            title: "Development Review",
            time: "01:30pm - 02:30pm",
            meetLink: "https://example.com",
            dailyLink: "https://example.com"
        },
        {
            id: 104,
            dateStr: "Nov 10",
            title: "Public Review",
            time: "04:30pm - 05:30pm",
            meetLink: "https://example.com",
            dailyLink: "https://example.com"
        }
    ]);

    // Which three-dot menu is open
    const [activeMenuId, setActiveMenuId] = useState(null);

    // CREATE MEETING
    const handleCreateMeeting = () => {

        const newMeeting = {
            id: Date.now(),
            title: "New Meeting",
            date: "Upcoming Date, 12:00pm - 01:00pm",
            joined: "+1 others joined",
            link: "https://google.com",
            typeLink: "https://example.com"
        };

        setUpcomingMeetings([
            ...upcomingMeetings,
            newMeeting
        ]);

        alert("New meeting created successfully!");
    };

    // EDIT / UPDATE MEETING
    const handleUpdateMeeting = (id) => {

        setUpcomingMeetings(
            upcomingMeetings.map((meeting) => {

                if (meeting.id === id) {

                    return {
                        ...meeting,
                        title: `${meeting.title} (Updated)`
                    };

                }

                return meeting;
            })
        );

        setActiveMenuId(null);

        alert("Meeting updated successfully!");
    };

    // DELETE MEETING
    const handleDeleteMeeting = (id) => {

        setUpcomingMeetings(
            upcomingMeetings.filter(
                (meeting) => meeting.id !== id
            )
        );

        setActiveMenuId(null);

        alert("Meeting deleted successfully!");
    };

    // OPEN LINK
    const navigateToLink = (url) => {

        if (url) {

            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    };

    return (

        <div className="meet">

            <Navbar />

            <h2 className="meet1">
                Meetings Panel
            </h2>

            {/* ACTION CARDS */}

            <div className="meet10">

                {/* NEW MEETING */}

                <div
                    className="meet2"
                    onClick={handleCreateMeeting}
                    style={{ cursor: "pointer" }}
                >

                    <div className="meet6">

                        <div className="meet3">
                            <IoVideocamOutline className="meet4" />
                        </div>

                        <span className="meet5">
                            New Meeting
                        </span>

                    </div>

                </div>

                {/* JOIN VIA ID */}

                <div className="meet12">

                    <div className="meet16">

                        <div className="meet13">
                            <FaPlus className="meet14" />
                        </div>

                        <span className="meet15">
                            Join Via ID
                        </span>

                    </div>

                </div>

                {/* SCHEDULE CARD */}

                <div className="meet22">

                    <div className="meet26">

                        <div className="meet23">
                            <AiOutlineSchedule className="meet24" />
                        </div>

                        <span className="meet25">
                            Schedule Card
                        </span>

                    </div>

                </div>

            </div>

            {/* UPCOMING MEETINGS */}

            <div>

                <h2>
                    Upcoming Meetings
                </h2>

                <div className="july1000">

                    {upcomingMeetings.map((meeting) => (

                        <div
                            className="july1"
                            key={meeting.id}
                        >

                            <div className="july2">

                                <div className="july3">

                                    <span className="july7">
                                        {meeting.title}
                                    </span>

                                    {/* THREE DOT MENU */}

                                    <div className="action-menu-container">

                                        <HiDotsVertical
                                            className="july100"
                                            onClick={() => {

                                                if (
                                                    activeMenuId ===
                                                    meeting.id
                                                ) {

                                                    setActiveMenuId(null);

                                                } else {

                                                    setActiveMenuId(
                                                        meeting.id
                                                    );

                                                }

                                            }}
                                        />

                                        {/* DROPDOWN */}

                                        {activeMenuId === meeting.id && (

                                            <div className="dropdown-action-popover">

                                                {/* EDIT */}

                                                <button
                                                    onClick={() =>
                                                        handleUpdateMeeting(
                                                            meeting.id
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                {/* DELETE */}

                                                <button
                                                    onClick={() =>
                                                        handleDeleteMeeting(
                                                            meeting.id
                                                        )
                                                    }
                                                    className="danger-btn"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        )}

                                    </div>

                                </div>

                                {/* DATE */}

                                <span className="july4">
                                    {meeting.date}
                                </span>

                                {/* BUTTONS */}

                                <div className="july8">

                                    <button
                                        className="july5"
                                        onClick={() =>
                                            navigateToLink(
                                                meeting.link
                                            )
                                        }
                                    >
                                        Meeting Info
                                    </button>

                                    <button
                                        className="july6"
                                        onClick={() =>
                                            navigateToLink(
                                                meeting.typeLink
                                            )
                                        }
                                    >
                                        Daily Link
                                    </button>

                                </div>

                            </div>

                            {/* JOIN SECTION */}

                            <div className="july10">

                                <span className="july9">
                                    {meeting.joined}
                                </span>

                                <button
                                    className="july99"
                                    onClick={() =>
                                        navigateToLink(
                                            meeting.link
                                        )
                                    }
                                >
                                    Join Meeting
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* HISTORY */}

            <div>

                <h2>
                    History
                </h2>

                <div className="history-grid-layout">

                    {historyMeetings.map((hist) => (

                        <div
                            className="history-item-card"
                            key={hist.id}
                        >

                            {/* HISTORY HEADER */}

                            <div className="history-header-row">

                                <span className="history-date-label">
                                    {hist.dateStr}
                                </span>

                                <FaRegCalendar
                                    className="history-calendar-icon"
                                />

                            </div>

                            {/* HISTORY BODY */}

                            <div className="history-body-info">

                                <span className="history-meeting-title">
                                    {hist.title}
                                </span>

                                <span className="history-timestamp">
                                    {hist.time}
                                </span>

                            </div>

                            {/* HISTORY BUTTONS */}

                            <div className="history-footer-actions">

                                <button
                                    className="history-action-btn primary"
                                    onClick={() =>
                                        navigateToLink(
                                            hist.meetLink
                                        )
                                    }
                                >
                                    Meeting
                                </button>

                                <button
                                    className="history-action-btn secondary"
                                    onClick={() =>
                                        navigateToLink(
                                            hist.dailyLink
                                        )
                                    }
                                >
                                    Daily
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Meetings;