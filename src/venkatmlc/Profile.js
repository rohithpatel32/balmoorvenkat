import React from "react";
import "../style/Profile.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaIdCardClip } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";

import { FaCalendarAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


function Profile(){

    return(
        <>
        <div className="profile">
            <div className="profile1">
                <h2>My Profile</h2>
                <div className="profile2">
                  <BsFillPersonFill  className="profile3"/> 
                  <h2 className="profile4">Medipelli Rohith</h2> 
                  <span className="profile5">MLA Administrator</span>
                </div>

                <div className="profile11">
                    <h2 className="profile16">Personal Information</h2>
                    <div className="ear1">
                    <div className="profile12">
                        <div className="pro2">
                        <div className="pro1">
                          <BsFillPersonFill   className="profile13"/> 
                          </div>
                          <span className="profile14">Name</span>
                          <span className="profile15">Medipelli Rohith</span>
                          </div>
                    </div>

                    <div className="profile22">
                        <div className="pro22">
                            <div className="pro21">
                        <IoMdMail   className="profile23"/>
                        </div>
                        <span className="profile24">Email</span>
                        <span className="profile25">rohithpatel32@gmail.com</span>
                        </div>

                    </div>

                    <div className="profile32">
                        <div className="pro32">
                            <div className="pro31">
                    <FaPhoneAlt  className="profile33"/>
                    </div>
                    <span className="profile34">Phone</span>
                    <span className="profile35">+91 9989855072</span>
                    </div>
                    </div>
         </div>
         <div className="ear2">
                    <div className="profile42">
                        <div className="pro42">
                            <div className="pro41">
                    <BsFillPersonFill  className="profile43"/> 
                    </div>
                     <span className="profile44">Gender</span>
                     <span className="profile45">Male</span>
                     
                     </div>
                    </div>
                  
                  <div className="profile52">
                    <div className="pro52">
                        <div className="pro41">
                  <FaBirthdayCake className="profile53" />
                  </div>
                  <span className="profile54">Date Of Birth</span>
                  <p className="profile55">25-07-1996</p>
                  </div>
                  </div>

                  <div className="profile62">
                    <div className="pro62">
                        <div className="pro61">
                  <IoLocationSharp  className="profile63"/>
                  </div>
                  <span className="profile64">Adilabad</span>
                  <span className="profile65">Jammikunta, Telangana</span>
                  </div>
                  </div>
                  </div>
                
                </div>





                <div className="inform11">
                    <h2 className="inform16">Profession Information</h2>
                    <div className="eye1">

                    <div className="inform12">
                        <div className="plus12">
                            <div className="plus11">
                   <FaIdCardClip className="inform13" />
                   </div>
                   <span className="inform14">Employe ID</span>
                   <span className="inform15">MLA001</span>
                   </div>
                    </div>
                    
                    <div className="inform22">
                        <div className="plus22">
                            <div className="plus21">
                    <FcDepartment className="inform23" />
                    </div>
                    <span className="inform24">Department</span>
                    <span className="inform25">Administration</span>
                    </div>
                    </div>

                    <div className="inform32">
                        <div className="plus32">
                            <div className="plus31">
                  <FaCalendarAlt  className="inform33"/>
                  </div>
                  <span className="inform34">Joining Date</span>
                  <p className="inform35">01-jan-2026</p>
                  </div>
                    </div>
             </div>
             <div className="eye2">
                    <div className="inform42">
                        <div className="plus42">
                            <div className="plus41">
                  <FaIdCardClip  className="inform43"/>
                  </div>
                  <span className="inform44">Experiencde</span>
                  <span className="inform45">2 Years</span>
                  </div>

                    </div>
                    </div>
                </div>

                <div className="lock11">
                    <h2 className="lock16">Security</h2>
                    <div className="lockup">

                    <div className="lock12">
                        <div className="kick12">
                            <div className="kick11">
                   <BsFillPersonFill  className="lock13"/> 
                   </div>
                   <span className="lock14">Username</span>
                   <span className="lock15"> Rohith_admin</span>
                   </div>
                    </div>

                    <div className="lock22">
                        <div className="kick22">
                            <div className="kick21">
                        <FaLock className="lock23" />
                        </div>
                        <span className="lock24">Password</span>
                        <span className="lock25">*************</span>
                        </div>
                    </div>
                    </div>
      </div>  

                <div className="press1">
                    <button className="press2"><FaEdit />Edit Profile</button>
                    <button className="press3"><FaKey />Change Password</button>
                </div>
            </div>
        </div>
        </>
    )
}export default Profile;