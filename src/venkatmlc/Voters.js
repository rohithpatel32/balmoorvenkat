import React from "react";
import "../style/Voters.css"
import { LuDot } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { RiMenu3Line } from "react-icons/ri";

import { FaPlus } from "react-icons/fa6";
import { LuImport } from "react-icons/lu"

import { BiExport } from "react-icons/bi";


import { FaDownload } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { category: "Male", turnout: 78 },
  { category: "Female", turnout: 72 },
  { category: "Others", turnout: 3 },
  { category: "Overall", turnout: 75 }
];







function Voters (){

    return(
        <>
        <div className="voterpage">
            <div className="vote0">
                <div>
            <h1 className="vote">Voters Dashboard</h1>
            <div className="vote3">
            <p className="vote1">Ramagundam Assembly Constituency</p>
            <TiTick  className="tick"/>
            </div>
            <div className="vote2">
            <p>Constituency No. 209</p>
            
                <LuDot />
             <p>
                Ramagudam District, Telangana
             </p>
                             <LuDot />
                             <p>
                            Lok Sabha:Hyderbad
                             </p>


                
            </div>
            </div>
            <div className="vote4">
                <button> <FaDownload /> Download Reciept
</button>
            </div>
            </div>
            <div className="pol">
            <div className="vote5">
                <div className="vote9">
                <IoPeople  className="vote10"/>
                <p className="vote6">Total Voters</p>
                </div>
                <p className="vote7">2,34,000</p>
                <p className="vote8">Total Electors</p>
                </div>




                  <div className="vote11">
                <div className="vote15">
                <TiTick className="vote16"/>
                <p className="vote12">Votes cast</p>
                <p>(2024)</p>
                </div>
                <p className="vote13">1,79,900</p>
                <p className="vote14">Total Votes Polled</p>
                </div>

           



           
                  <div className="vote17">
                <div className="vote21">
                <FaRegClock   className="vote22"/>
                <p className="vote18">Voters Turnout</p>
                </div>
                <p className="vote19">82.9%</p>
                <p className="vote20">In 2024 Elections</p>
                </div>



         
                  <div className="vote23">
                <div className="vote27">
                <IoMdMale  className="vote28"/>
                <p className="vote24">Male Voters</p>
                </div>
                <p className="vote25">1,10,000</p>
                <p className="vote26">50.29% Total</p>
                </div>



                  
                  <div className="vote29">
                <div className="vote33">
                <IoMdFemale  className="vote34"/>
                <p className="vote30">Female Voters</p>
                </div>
                <p className="vote31">1,08,500</p>
                <p className="vote32">49.71%Total</p>
                </div>
            




         </div>
         
             <div className="vote37">
                <div className="vote41">
                <IoMdFemale  className="vote42"/>
                <p className="vote38">New Voters</p>
                <p>(2024)</p>
                </div>
                <p className="vote39">3,256</p>
                <p className="vote40">Add This Year</p>
                </div>


                <div className="gender22">
<div className="constituency-card">
  <div className="card-header">
    <HiOutlineBuildingOffice className="card-icon" />
    <h4>Constituency Information</h4>
  </div>

  <div className="info-row">
    <p>Constituency No.</p>
    <span>109</span>
  </div>

  <div className="info-row">
    <p>State</p>
    <span>Telangana</span>
  </div>

  <div className="info-row">
    <p>District</p>
    <span>Karimnagar</span>
  </div>

  <div className="info-row">
    <p>Lok Sabha Constituency</p>
    <span>Hyderabad</span>
  </div>

  <div className="info-row">
    <p>Current MLA (2024)</p>
    <span className="padi">Padi Kaushik Reddy (TRS)</span>
  </div>

  <div className="info-row">
    <p>Established</p>
    <span>1951</span>
  </div>
</div>


<div className="gender-card">
  <h3 className="genderline">Gender Distribution</h3>

  <div className="pie-chart"></div>

  <div className="legend">
    <div className="legend-item">
      <span className="color male"></span>
      <p>Male - 1,10,000 (50.29%)</p>
    </div>

    <div className="legend-item">
      <span className="color female"></span>
      <p>Female - 1,08,500 (49.71%)</p>
    </div>
  </div>
  
</div>



    <div className="turnout-card">
      <h3>Voter Turnout Till Date</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis unit="%" />
          <Tooltip />
          <Bar dataKey="turnout" fill="#0d6efd" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  





</div>

<div className="tabl1">
    <div className="tabl2">
    <RiMenu3Line />
    <h4 c>Mandal Wisw Voters Summary</h4>
    </div>
    <button><FaPlus />
        Add Voters
    </button>
    <button><BiExport />Import Excel</button>
    <button><LuImport />Export Excel</button>
    <input type="name" placeholder="Search Mandal"></input>
 
 
 <table >
    <thead>
        <tr>
            <th>S.NO</th>
            <th>Mandal</th>
            <th>Male Voters</th>
            <th>Female Voters</th>
            <th>Total Voters</th>
            <th>% of Total</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>Huzurabad</td>
            <td>32,450</td>
            <td>31,820</td>
            <td>64,270</td>
            <td>29.36%</td>
        </tr>

        <tr>
            <td>2</td>
            <td>Jammikunta</td>
            <td>28,760</td>
            <td>27,980</td>
            <td>56,740</td>
            <td>25.91%</td>
        </tr>

        <tr>
            <td>3</td>
            <td>Veenavanka</td>
            <td>18,540</td>
            <td>18,220</td>
            <td>36,760</td>
            <td>16.79%</td>
        </tr>

         <tr>
            <td>3</td>
            <td>Kamalapur</td>
            <td>21,540</td>
            <td>19,231</td>
            <td>26,700</td>
            <td>26.23%</td>
        </tr>

        
         <tr>
            <td>3</td>
            <td>Ellanthakunta</td>
            <td>34,690</td>
            <td>18,850</td>
            <td>12,600</td>
            <td>12.23%</td>
        </tr>

        <tr>
            <td></td>
            <td>Total</td>
            <td>1,10,000</td>
            <td>1,08,500</td>
            <td>2,18,859</td>
            <td>100.00%</td>
        </tr>
    </tbody>
</table>
</div>

       

        </div>




        
        </>
    )

}export default Voters;
