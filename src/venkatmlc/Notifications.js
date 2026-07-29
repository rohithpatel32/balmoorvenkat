import React from "react";
import "../style/Notifications.css";
import { LuPlus } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";


function Notifications (){

    return(
        <>
        <div className="ntf">
        <div className="notification">
            <div className="not">
                <h2 className="not1">Notifications</h2>
                <button className="not2"><LuPlus  className="not4"/> New Notification</button>
            </div>
            <div className="not5">
                <input type="name"  placeholder=" Search notifications" className="not7"></input>
              
<div  className="not6">
<select id="priority" name="priority">
  <option value="all">All Priorities</option>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select>


<select id="status" name="status">
  <option value="all">All Status</option>
  <option value="unread">Unread</option>
  <option value="read">Read</option>
</select>
</div>
            </div>
            <div className="sai">
            <div className="not8">
<IoIosNotifications className="not9" />
<span className="not10">Total Notifications</span>
<h2 className="not11">128</h2>
            </div>

               <div className="not18">
<IoIosNotifications  className="not19"/>
<span className="not20"> Unread</span>
<h2 className="not21">38</h2>
            </div>


                       <div className="not28">
<IoIosNotifications  className="not29"/>
<span className="not30"> Read</span>
<h2 className="not31">90</h2>
            </div>
            </div>

            <div>
                <table>
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
                        <tr>
                            <td>1</td>
                            <td>Meeting Remainder</td>
                            <td>Village meeting tommorow at 10:30Am</td>
                            <td>10-july-2026</td>
                            <td>High</td>
                            <td>Unread</td>
                            <td>
                                  <div className="sea">
                                <div className="sea1">
                            <FaEye />
                                </div>
                                <div className="sea2">
                                    <FaEdit />
                                    </div>
                                <div className="sea3">
                                    <MdOutlineDelete />
                                    </div>
                                </div>
                            </td>
                        </tr>

                          <tr>
                            <td>2</td>
                            <td>Expense Approved</td>
                            <td>Read Construction Payment Approved</td>
                            <td>15-june-2026</td>
                            <td>Medium</td>
                            <td>Read</td>
                            <td>
                                  <div className="sea">
                                <div className="sea1">
                            <FaEye />
                                </div>
                                <div className="sea2">
                                    <FaEdit />
                                    </div>
                                <div className="sea3">
                                    <MdOutlineDelete />
                                    </div>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>3</td>
                            <td>New Griviance</td>
                            <td>Water Complaint Supply Recieved</td>
                            <td>17-july-2026</td>
                            <td>High</td>
                            <td>Unead</td>
                            <td>
                                 <div className="sea">
                                <div className="sea1">
                            <FaEye />
                                </div>
                                <div className="sea2">
                                    <FaEdit />
                                    </div>
                                <div className="sea3">
                                    <MdOutlineDelete />
                                    </div>
                                </div>
                            </td>
                        </tr>

                         <tr>
                            <td>4</td>
                            <td>Project Completed</td>
                            <td>Street light installation completed</td>
                            <td>20-july-2026</td>
                            <td>Low</td>
                            <td>Read</td>
                            <td>
                               <div className="sea">
                                <div className="sea1">
                            <FaEye />
                                </div>
                                <div className="sea2">
                                    <FaEdit />
                                    </div>
                                <div className="sea3">
                                    <MdOutlineDelete />
                                    </div>
                                </div>
                            </td>
                        </tr>


                        
                         <tr>
                            <td>5</td>
                            <td>New Vote Registered</td>
                            <td>One new vote added succesfully</td>
                            <td>23-july-2026</td>
                            <td>Medium</td>
                            <td>Unread</td>
                            <td>
                                <div className="sea">
                                <div className="sea1">
                            <FaEye />
                                </div>
                                <div className="sea2">
                                    <FaEdit />
                                    </div>
                                <div className="sea3">
                                    <MdOutlineDelete />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        </div>
        </>
    )
}export default Notifications;