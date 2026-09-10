import React, { useState } from "react";
import "../style/Meetings.css";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";
import Navbar from "./Navbar";

function Meetings() {
    // Simulated Mock Database State (GET initialized)
    const [upcomingMeetings, setUpcomingMeetings] = useState([
        { id: 1, title: "Daily Meetings", date: "July 24, 11:30am - 12:30pm", joined: "+5 others joined", link: "https://google.com", typeLink: "https://example.com" },
        { id: 2, title: "Public Meetings", date: "August 01, 10:30am - 02:30pm", joined: "+45 others joined", link: "https://google.com", typeLink: "https://example.com" },
        { id: 3, title: "MLC'S Meeting", date: "July 30, 04:30pm - 06:30pm", joined: "+99 others joined", link: "https://google.com", typeLink: "https://example.com" }
    ]);

    const [historyMeetings, setHistoryMeetings] = useState([
        { id: 101, dateStr: "Nov 10", title: "Agenda Review", time: "02:30pm - 03:30pm", meetLink: "https://example.com", dailyLink: "https://example.com" },
        { id: 102, dateStr: "Nov 10", title: "Roadissues Review", time: "10:30am - 12:00pm", meetLink: "https://example.com", dailyLink: "https://example.com" },
        { id: 103, dateStr: "Nov 10", title: "Development Review", time: "01:30pm - 02:30pm", meetLink: "https://example.com", dailyLink: "https://example.com" },
        { id: 104, dateStr: "Nov 10", title: "Public Review", time: "04:30pm - 05:30pm", meetLink: "https://example.com", dailyLink: "https://example.com" }
    ]);

    // Active dropdown ID state tracking for PUT/DELETE action menus
    const [activeMenuId, setActiveMenuId] = useState(null);

    // 1. POST Action - Create a New Random Meeting Block
    const handleCreateMeeting = () => {
        const newMeeting = {
            id: Date.now(),
            title: "New Scheduled Discussion",
            date: "Upcoming Date, 12:00pm - 01:00pm",
            joined: "+1 child joined",
            link: "https://google.com",
            typeLink: "https://example.com"
        };
        setUpcomingMeetings([...upcomingMeetings, newMeeting]);
        alert("POST Action: Successfully created a new meeting element!");
    };

    // 2. PUT Action - Edit an Existing Meeting Component Title
    const handleUpdateMeeting = (id) => {
        setUpcomingMeetings(upcomingMeetings.map(item => 
            item.id === id ? { ...item, title: `${item.title} (Updated Title)` } : item
        ));
        setActiveMenuId(null);
        alert("PUT Action: Meeting details systematically updated!");
    };

    // 3. DELETE Action - Remove Target Block Array Index
    const handleDeleteMeeting = (id) => {
        setUpcomingMeetings(upcomingMeetings.filter(item => item.id !== id));
        setActiveMenuId(null);
        alert("DELETE Action: Selected target meeting deleted.");
    };

    // Helper functions to safely handle button click hyperlinking
    const navigateToLink = (url) => {
        if(url) window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
        <div className="meet">
            <Navbar />
            <h2 className="meet1">Meetings Panel</h2>
            
            {/* Action Controller Grid (POST interface triggers here) */}
            <div className="meet10">
                <div className="meet2" onClick={handleCreateMeeting} style={{ cursor: 'pointer' }}>
                    <div className="meet6">
                        <div className="meet3">
                            <IoVideocamOutline className="meet4"/>
                        </div>
                        <span className="meet5">New Meeting</span>
                    </div>
                </div>
                <div className="meet12">
                    <div className="meet16">
                        <div className="meet13"><FaPlus className="meet14" /></div>
                        <span className="meet15">Join Via ID</span>
                    </div>
                </div>
                <div className="meet22">
                    <div className="meet26">
                        <div className="meet23"><AiOutlineSchedule className="meet24"/></div>
                        <span className="meet25">Schedule Card</span>
                    </div>
                </div>
            </div>
            
            {/* Upcoming List Section */}
            <div>
                <h2>Upcoming Meetings</h2>
                <div className="july1000">
                    {upcomingMeetings.map((meeting) => (
                        <div className="july1" key={meeting.id}>
                            <div className="july2">
                                <div className="july3">
                                    <span className="july7">{meeting.title}</span>
                                    <div className="action-menu-container">
                                        <HiDotsVertical 
                                            className="july100" 
                                            onClick={() => setActiveMenuId(activeMenuId === meeting.id ? null : meeting.id)}
                                        />
                                        {activeMenuId === meeting.id && (
                                            <div className="dropdown-action-popover">
                                                <button onClick={() => handleUpdateMeeting(meeting.id)}>Edit Title (PUT)</button>
                                                <button onClick={() => handleDeleteMeeting(meeting.id)} className="danger-btn">Delete (DELETE)</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <span className="july4">{meeting.date}</span>
                                <div className="july8">
                                    <button className="july5" onClick={() => navigateToLink(meeting.link)}>Meeting Info</button>
                                    <button className="july6" onClick={() => navigateToLink(meeting.typeLink)}>Daily Link</button>
                                </div>
                            </div>
                            <div className="july10">
                                <span className="july9">{meeting.joined}</span>
                                <button className="july99" onClick={() => navigateToLink(meeting.link)}>Join Meeting</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* History Cards Section */}
            <div>
                <h2>History</h2>
                <div className="history-grid-layout">
                    {historyMeetings.map((hist) => (
                        <div className="history-item-card" key={hist.id}>
                            <div className="history-header-row">
                                <span className="history-date-label">{hist.dateStr}</span>
                                <FaRegCalendar className="history-calendar-icon" />
                            </div>
                            <div className="history-body-info">
                                <span className="history-meeting-title">{hist.title}</span>
                                <span className="history-timestamp">{hist.time}</span>
                            </div>
                            <div className="history-footer-actions">
                                <button className="history-action-btn primary" onClick={() => navigateToLink(hist.meetLink)}>Meeting</button>
                                <button className="history-action-btn secondary" onClick={() => navigateToLink(hist.dailyLink)}>Daily</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Meetings;
