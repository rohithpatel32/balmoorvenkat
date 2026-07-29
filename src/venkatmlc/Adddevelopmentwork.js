import React from "react";
import "../style/Adddevelopmentwork.css";
import { useNavigate } from "react-router-dom";

function Adddevelopmentwork(){
    const navigate= useNavigate()

    return(
        <>
        <div className="dhe1">
            <div className="dhe5">
            <div>
       <h1 className="dhe2">Add Development Work</h1>
       <p className="dhe3">Enter development details and upload images to display on website</p>
       </div>
       <button  className="dhe4" onClick={()=>navigate("/Developmentworks")}>Back</button>
       </div>
       <div className="dhe6">
        <div >
        <h5>Mandal/Area*</h5>
        
        <select className="dhe7">
            <option value="">Select mandal</option>
            <option value="jammikunta">Jammikunta</option>
            <option value="huzurabad">Huzurabad</option>
            <option value="ellanthakunta">Ellanthakunta</option>
            <option value="kamalapur">Kamalapur</option>
            <option value="veenavanka">Veenavanka</option>
        </select>
        </div>
      <div>
        <h5>Catagory* </h5>
          <select className="dhe8">
            <option value=""> Select Catagory</option>
            <option value="drinking water">Drinking water</option>
            <option value="drinage">Drinage</option>
            <option value="tap water">Tap water</option>
            <option value="schools">Schools</option>
            <option value="street lights">Street lights</option>
        </select>
        </div>
       </div>
       <div className="dhe9" >
        <div>
        <h5>Development Title*</h5>
        <input type="text" placeholder="Enter the title of development work" className="dhe10"></input>
        </div>
        <div>
        <h5>Estimated Cost</h5>
        <input type="text" placeholder="Enter estimated cost" className="dhe11"></input>
        </div>
       </div>
       <div className="dhe12">
       <h5>Description*</h5>
       <textarea placeholder="Enter the description of development work" className="dhe13"></textarea>
       </div>
       </div>
      
        </>
    )
}export default Adddevelopmentwork;