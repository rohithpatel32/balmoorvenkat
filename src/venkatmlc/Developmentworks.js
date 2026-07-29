import React from "react";
import "../style/Developmentworks.css";
import { FaPlus } from "react-icons/fa6";
import{ useNavigate} from "react-router-dom"

function Developmentworks(){
    const navigate=useNavigate();
    


    return(
        <>
        <div className="development">
            <div className="ment2">
      <h1 className="ment1">Development Works</h1>
      <button className="pdev" onClick={()=>navigate("/Adddevelopmentwork")}><FaPlus /> Add Development Work</button>
      </div>
      <div className="ac1">
        <input type="text" placeholder="search Development Work........" className="ac2"></input>
        <select className="ac3">
  <option value="">All Category</option>
  <option value="Roads">Roads</option>
  <option value="Drainages">Drainages</option>
  <option value="Street Lights">Street Lights</option>
  <option value="Water Supply">Water Supply</option>
  <option value="Sewerage">Sewerage</option>
  <option value="Parks">Parks</option>
  <option value="Buildings">Buildings</option>
  <option value="Schools">Schools</option>
  <option value="Hospitals">Hospitals</option>
  <option value="Anganwadi Centers">Anganwadi Centers</option>
  <option value="Community Halls">Community Halls</option>
  <option value="Bus Shelters">Bus Shelters</option>
  <option value="CC Roads">CC Roads</option>
  <option value="BT Roads">BT Roads</option>
  <option value="Culverts">Culverts</option>
  <option value="Bridges">Bridges</option>
  <option value="Footpaths">Footpaths</option>
  <option value="Electricity">Electricity</option>
  <option value="Plantation">Plantation</option>
  <option value="Others">Others</option>
</select>

<select className="ac4">
  <option value="">Select Status</option>
  <option value="Proposed">Proposed</option>
  <option value="Approved">Approved</option>
  <option value="Tender Invited">Tender Invited</option>
  <option value="Tender Awarded">Tender Awarded</option>
  <option value="Work Started">Work Started</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
  <option value="On Hold">On Hold</option>
  <option value="Delayed">Delayed</option>
  <option value="Cancelled">Cancelled</option>
</select>
      </div>

      <div>
        <table className="tble">
            <thead className="tble1">
                <tr>
                    <th>S.NO</th>
                    <th>Title</th>
                    <th>Mandal</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>CC Road Construction</td>
                    <td>Jammikunta</td>
                    <td>Road works</td>
                    <td>Completed</td>
                    <td>20-05-2024</td>
                    <td >
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </td>
                </tr>


                <tr>
                    <td>2</td>
                    <td>Drainage Work</td>
                    <td>Huzurabad</td>
                    <td>Drainage</td>
                    <td>Ongoing</td>
                    <td>15-06-2024</td>
                                        <td >
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </td>
                    
                </tr>

                <tr>
                    <td>3</td>
                    <td>Water Tank Construction</td>
                    <td>Veenavanka</td>
                    <td>Water Project</td>
                    <td>Completed </td>
                    <td>10-07-2024</td>
                     <td >
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </td>
                    
                </tr>
            </tbody>
        </table>
      </div>
        </div>
        </>
    )
}export default Developmentworks;