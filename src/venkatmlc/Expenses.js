import React from "react";
import "../style/Expenses.css";
import { HiMiniXMark } from "react-icons/hi2";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; 

function Expenses(){
    const navigate =useNavigate()

    return(
        <>
        
        <div className="ex">
            
             <Navbar />
            
            <div className="ex1">
            <div className="ex2"> 
            <h2 className="ex3">New expense</h2>
            <p className="ex4">Fill in the appropriate details to log your expense</p>
            </div>
            <div className="ex6">
           <button className="ex5" onClick={()=>navigate("/Home")}> <HiMiniXMark  /></button> 
            </div>

            
            </div>
            <div className="ex20">
            <div className="ex21">
            <div className="ex7">
                <label className="ex8">Merchant Name</label>
                <br/>
                <input type="text" placeholder="Enter the merchants name" className="ex9"></input>
            </div>

            <div className="ex10">
               <label for="expense-category" className="ex11">Category of Expense</label><br/>

<select className="expense-category" name="expenseCategory">
    <option value="">-- Select Category --</option>
    <option value="travel">Travel</option>
    <option value="food">Food & Beverages</option>
    <option value="office">Office Expenses</option>
    <option value="utilities">Utilities</option>
    <option value="rent">Rent</option>
    <option value="salary">Salary</option>
    <option value="maintenance">Maintenance</option>
    <option value="marketing">Marketing</option>
    <option value="medical">Medical</option>
    <option value="training">Education & Training</option>
    <option value="software">Software & IT</option>
    <option value="miscellaneous">Miscellaneous</option>
</select>

            </div>
            <div className="ex13">
                <label className="ex14">Transaction date</label><br/>
                <input
    type="date"
    id="transactionDate"
    name="transactionDate" className="ex15"></input>
            </div>
            <div className="ex16">
                <label className="ex17">Description</label><br/>
                <textarea className="ex18">Payment description</textarea>
            </div>
            </div>
        <div className="ex30">
<label for="receipt" className="ex31">Drag or Upload the Receipt Here (.JPG, .JPEG, .PDF)</label>
<input
    type="file"
    id="receipt"
    name="receipt"
    accept=".jpg,.jpeg,.pdf"
></input>
</div>
</div>
<div className="ex50">
<button className="ex51">File Expenses</button>
</div>

        </div>
        </>
    )
}export default Expenses;