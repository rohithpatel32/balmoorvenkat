import React from "react";
import "../style/Grivances.css";
import { FaPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Grivances(){

    return(
        <>
        <div className="give">
            <div className="give1" >
              <h2 className="give2">Grievences</h2>
              <button className="give3"><FaPlus />Add Complaint</button>
              </div>
              <div className="give4">
              <input type="text" placeholder="Search Complaint...." className="give5"></input>

              <select id="status" name="status">
    <option value="all">All Status</option>
    <option value="unread">Unread</option>
    <option value="read">Read</option>
</select>
              </div>
              <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Village</th>
                        <th>Complaint</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ravi</td>
                        <td>Mobile</td>
                        <td>Huzurabad</td>
                        <td>Water supply problem</td>
                        <td>pending</td>
                        <div className="give11">
                            <div className="give12">
                            <FaEye className="give13" />
                            </div>
                            <div className="give14">
                           <FaEdit className="give15" />
                            </div>
                            <div className="give16">
                       <MdDelete  className="give17"/>
                            </div>
                        </div>
                    </tr>


                      <tr>
                        <td>2</td>
                        <td>Dhanush</td>
                        <td>9562356856</td>
                        <td>Jammikunta</td>
                        <td>Road Damage</td>
                        <td>Resolve</td>
                        <div className="give21">
                            <div className="give22">
                            <FaEye  className="give23"/>
                            </div>
                            <div className="give24">
                           <FaEdit  className="give25"/>
                            </div>
                            <div className="give26">
                       <MdDelete className="give27" />
                            </div>
                        </div>
                    </tr>

                      <tr>
                        <td>3</td>
                        <td>Ram</td>
                        <td>8885556669</td>
                        <td>Veenavanka</td>
                        <td>Drainage Block</td>
                        <td>In Progress</td>
                        <div className="give31">
                            <div className="give32">
                            <FaEye className="give33" />
                            </div>
                            <div className="give34">
                           <FaEdit className="give35" />
                            </div>
                            <div className="give36">
                       <MdDelete className="give37" />
                            </div>
                        </div>
                    </tr>


                      <tr>
                        <td>4</td>
                        <td>Venkatesh</td>
                        <td>7897895656</td>
                        <td>Kamalapur</td>
                        <td>Street Lights</td>
                        <td>pending</td>
                        <div className="give41">
                            <div  className="give42">
                            <FaEye className="give43" />
                            </div>
                            <div className="give44">
                           <FaEdit className="give45" />
                            </div>
                            <div className="give46">
                       <MdDelete  className="give47"/>
                            </div>
                        </div>
                    </tr>
                </tbody>
              </table>
        </div>
        </>
    )
}export default Grivances;