import React from "react";
import "../style/Meetings.css";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import { AiOutlineSchedule } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";


function Meetings (){

    return(
        <>
        <div className="meet">
            <h2 className="meet1">Meetings</h2>
            <div className="meet10">
            <div className="meet2">
                <div className="meet6">
                <div className="meet3">
                <IoVideocamOutline  className="meet4"/>
                </div>
                <span className="meet5">New Meeting</span>
                </div>
            </div>
            <div className="meet12">
                <div className="meet16">
                    <div className="meet13">
             <FaPlus className="meet14" />
             </div>
             <span className="meet15">Join</span>
             </div>
            </div>
            <div className="meet22">
                <div className="meet26">
                    <div className="meet23">
            <AiOutlineSchedule  className="meet24"/>
            </div>
            <span className="meet25">Schedule</span>
            </div>
            </div>
            </div>
            
            <div >
                <h2>Upcoming Meetings</h2>
                <div className="july1000">
                <div className="july1">
                    <div className="july2">
                        <div className="july3">
                    <span className="july7">Daily Meetings</span>
                    <HiDotsVertical  className="july100"/>
                    </div>
                    <span className="july4">July 24, 11:30am - 12:30pm</span>
                    <div className="july8">
                    <button className="july5">Meeting</button>
                    <button className="july6">Daily</button>
                    </div>
                    </div>
                    <div className="july10">
                        <span className="july9">+5 others joined </span>
                        <button className="july99">Join Meeting</button>
                    </div>
                </div>
                


  <div className="july1">
                    <div className="july2">
                        <div className="july3">
                    <span className="july7">Public Meetings</span>
                    <HiDotsVertical  className="july100"/>
                    </div>
                    <span className="july4">August 01, 10:30am - 02:30pm</span>
                    <div className="july8">
                    <button className="july5">Meeting</button>
                    <button className="july6">Daily</button>
                    </div>
                    </div>
                    <div className="july10">
                        <span className="july9">+45 others joined </span>
                        <button className="july99">Join Meeting</button>
                    </div>
                </div>







  <div className="july1">
                    <div className="july2">
                        <div className="july3">
                    <span className="july7">MLC'S Meeting</span>
                    <HiDotsVertical  className="july100"/>
                    </div>
                    <span className="july4">July 30, 04:30pm - 06:30pm</span>
                    <div className="july8">
                    <button className="july5">Meeting</button>
                    <button className="july6">Daily</button>
                    </div>
                    </div>
                    <div className="july10">
                        <span className="july9">+99 others joined </span>
                        <button className="july99">Join Meeting</button>
                    </div>
                </div>



</div>



            </div>


         <div >
            <h2>History</h2>
            <div className="free1">
            
            <div className="his">
                <div className="his5">
                <span className="his1">Nov10 </span>
                < FaRegCalendar  className="his6" />
                </div>
                <div className="his2">
                <span className="his7">Agenda Review</span>
                <span className="his8">02:30pmn - 03:30pm</span>
                </div>
                <div className="his9">
                <button className="his3">Meeting</button>
                <button className="his4">Daily</button>
                </div>
            </div>




 <div className="her">
                <div className="her5">
                <span className="her1">Nov10 </span>
                < FaRegCalendar  className="her6" />
                </div>
                <div className="her2">
                <span className="her7">Roadissues Review</span>
                <span className="her8">10:30am - 12:00pm</span>
                </div>
                <div className="her9">
                <button className="her3">Meeting</button>
                <button className="her4">Daily</button>
                </div>
            </div>

</div>




 <div className="tree1">
            
            <div className="he">
                <div className="he5">
                <span className="he1">Nov10 </span>
                < FaRegCalendar  className="he6" />
                </div>
                <div className="he2">
                <span className="he7">Development Review</span>
                <span className="he8">01:30pmn - 02:30pm</span>
                </div>
                <div className="he9">
                <button className="he3">Meeting</button>
                <button className="he4">Daily</button>
                </div>
            </div>




 <div className="she">
                <div className="she5">
                <span className="she1">Nov10 </span>
                < FaRegCalendar  className="she6" />
                </div>
                <div className="she2">
                <span className="she7">Public Review</span>
                <span className="she8">04:30pmn - 05:30pm</span>
                </div>
                <div className="she9">
                <button className="she3">Meeting</button>
                <button className="she4">Daily</button>
                </div>
            </div>

</div>













         </div>






         





         




            
        </div>
        </>
    )
}export default Meetings;