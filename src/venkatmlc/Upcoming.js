import React from "react";
import '../style/Upcoming.css';
import { SlCalender } from "react-icons/sl";
import { TfiAnnouncement } from "react-icons/tfi";

import { FaRoad } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

function Upcoming() {

    return (
        <>
        <div className="bottle">
            <div className="hp1">

                <div className="hp2">
                    <p className="hp3">Upcoming Meetings</p>
                    <div className="upcoming1">
                        <div className="dell1">

                            <div className="up5">
                                <div className="dell2">
                                <SlCalender className="up4" />
                                <div>
                                    <p className="up1">Village Development Meeting</p>
                                    <p className="up2">25 May 2026 .  10.00AM </p>
                                </div>
                                </div>
                                <button className="up3">Village Hall</button>
                            </div>

                            <div>
                                <div className="up10">
                                    <div className="dell3">
                                    <SlCalender className="up9" />
                                    <div>
                                        <p className="up6">Youth Interaction Program</p>
                                        <p className="up7">26 May 2026 .  11.00AM </p>
                                    </div>
                                    </div>
                                    <button className="up8">Community Center</button>
                                </div>
                            </div>
                            <div>
                                <div className="up15">
                                    <div className="dell4">
                                    <SlCalender className="up14" />
                                    <div>
                                        <p className="up11">Booth levelworkers meeting</p>
                                        <p className="up12">26 May 2026 .  04.00PM </p>
                                    </div>
                                    </div>
                                    <button className="up13">Party Office</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>








            </div>








               <div className="ch1">

                <div className="ch2">
                    <div className="bottle1">
                    <div className="bottle2">
                        <TfiAnnouncement  className="announ"/>
                    
                    <p className="mi3">Latest Announcements</p>
                    </div>
                    <a href="www.google.com" className="view1">view all</a>
                    </div>
                    
                    <div className="bottomcoming1">
                        <div className="choco1">

                            <div className="mi5">
                                <div className="choco2">
                                <FaRoad  className="mi4" />
                                <div>
                                    <p className="mi1">New road construction work has started in Ward.5</p>
                                    <p className="mi2">20 May 2026 .  10.00AM </p>
                                </div>
                                </div>
                                
                            </div>

                            <div>
                                <div className="mi10">
                                    <div className="choco3">
                                    <IoPeople className="mi9" />
                                    <div>
                                        <p className="mi6">Public hearing on water supply issues on 28may 2026</p>
                                        <p className="mi7">26 May 2026 . </p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div>
                               
                            </div>
                        </div>


                    </div>
                </div>








            </div>
            </div>
        </>
    )

} export default Upcoming;