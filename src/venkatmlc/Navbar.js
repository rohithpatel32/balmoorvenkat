import React from "react";
import {NavLink,useLocation} from "react-router-dom";
import '../style/Navbar.css';
import venkatlogonobg from '../assets/venkatlogonobg.png';
import { FaHome } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { RiChatUploadLine } from "react-icons/ri";
import { TbCalendarUser } from "react-icons/tb";
import { SiDevelopmentcontainers } from "react-icons/si";
import { GiExpense } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
// import { FaBars } from "react-icons/fa";


function Navbar (){


    const location = useLocation();

   if ( location.pathname === "/login") {
    return null;
}
    return(
        <>
        <div className="sur">
        <div className="navcontainer">
        <img src={venkatlogonobg} alt="" height="100px" width="100px" className="venkatlogo"/>
        <p className="bal">Balmoor Venkat Reddy</p>
        <p className="knr1">MLC</p>
        <p className="knr2">Karimnagar Constituency</p>
        <ul>
            <li><NavLink to='/dashboard'><span><FaHome /></span>Dashboard</NavLink></li>
         <li><NavLink to='/voters'><span><MdPeople /></span>Voters</NavLink></li>
         <li><NavLink to='/grivances'><span><RiChatUploadLine /></span>Grivances</NavLink></li>
         <li><NavLink to="/meetings"><span><TbCalendarUser /></span>Meetings</NavLink></li>
         <li><NavLink to="/developmentworks"><span><SiDevelopmentcontainers /></span>Developmentworks</NavLink></li>
          <li><NavLink to="/expenses"><span><GiExpense /></span>Expenses</NavLink></li>
           <li><NavLink to="/reports"><span><TbReportSearch /></span>Reports</NavLink></li>
           <li><NavLink to="/notifications"><span><IoIosNotificationsOutline /></span>Notifications</NavLink></li> 
           <li><NavLink to="/profile"><span><CgProfile /></span>Profile</NavLink></li>
           <li><NavLink to="/login"><button>Logout</button></NavLink></li>  
        </ul>
        </div >
       
    </div>
        
        </>
    )
}export default Navbar;