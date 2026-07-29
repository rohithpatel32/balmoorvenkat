import React from "react";
import "../style/Reports.css"
import { TbReportSearch } from "react-icons/tb";
import Barreport from "../venkatmlc/Barreport";
import Piereport from "../venkatmlc/Piereport";
function Reports (){

    return(
        <>
        <div className="enfield1">
       <div className="re1">
  <div className="re2">
    <div className="re6">
    <TbReportSearch  className="re7"/>
    <h3>Reports</h3>
    </div>

    <div className="re3">
      <button className="re4">Export PDF</button>
      <button className="re5">Excel</button>
    </div>
  </div>
  
  </div> 
  <div className="enfield2">
    <h3>Generate Reports</h3>
   <form className="enfield0"> 
    <label for="fromDate">From Date</label>
<input type="date" id="fromDate" name="fromDate"></input>
<label for="toDate">To Date</label>
<input type="date" id="toDate" name="toDate"></input>

<label for="reportType">Report Type</label>
<select id="reportType" name="reportType">
    <option value="">-- Select Report Type --</option>
    <option value="summary">Summary Report</option>
    <option value="detailed">Detailed Report</option>
    <option value="expense">Expense Report</option>
    <option value="development">Development Works Report</option>
    <option value="grievance">Grievance Report</option>
</select>

<label for="category">Category</label>
<select id="category" name="category">
    <option value="">-- Select Category --</option>
    <option value="roads">Roads</option>
    <option value="drainage">Drainage</option>
    <option value="waterSupply">Water Supply</option>
    <option value="streetLights">Street Lights</option>
    <option value="parks">Parks</option>
    <option value="buildings">Buildings</option>
    <option value="education">Education</option>
    <option value="health">Health</option>
</select>


<label for="mandal">Mandal</label>
<select id="mandal" name="mandal">
    <option value="">-- Select Mandal --</option>
    <option value="karimnagar">Karimnagar</option>
    <option value="choppadandi">Choppadandi</option>
    <option value="gangadhara">Gangadhara</option>
    <option value="ganneruvaram">Ganneruvaram</option>
    <option value="manakondur">Manakondur</option>
    <option value="ramadugu">Ramadugu</option>
    <option value="thimmapur">Thimmapur</option>
    <option value="veenavanka">Veenavanka</option>
</select>

</form>
<button className="enfield100">Generate Report</button>
</div>
<div className="enfield305">
    <div className="enfield306">
    <h3>Summary Cards</h3>
    </div>
    <div className="enfield200">
    <div className="enfield101">
    <span>Total Development Works</span>
    <span>248</span>
    </div>
    

 <div className="enfield102">
    <span>Completed Projects</span>
    <span>248</span>
    </div>

    <div className="enfield103">
    <span>Pending Projects</span>
    <span>62</span>
    </div>
    

    
    <div className="enfield104">
    <span>Total Budget</span>
    <span>₹8.4cr</span>
    </div>

</div>
</div>
<div className="enfield300">
    <div className="enfield301">
    <Barreport/>
    </div>
    <div>
    <Piereport />
    </div>
</div>

</div>

        </>
    )
}export default Reports;