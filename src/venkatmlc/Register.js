import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";



function Register(){
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        password:""

    })

    const onhandleChange=(e)=>{
        setForm({
            ...form,
            
            [e.target.name]:e.target.value

        })
    }

    const onhandleSubmit=(e)=>{
        e.preventDefault()
    
    if(form.email==="rohith"  && 
        form.password==="12345")
        {
            alert("login successfull");
            navigate("/Dashboard")
        }
        else{
            alert("invlid username or password")

        }
    }
    return(
        <>
        <form onSubmit={onhandleSubmit}>
        <input
        type="email"
        name="email"
        placeholder="enter email or username"
        value={form.email}
        onChange={onhandleChange}
        />
        <input type="password"
        name="password"
        placeholder="enter password"
        value={form.password}
        onChange={onhandleChange}
        />
  <button type="submit">submit</button>
  </form>
        </>
    )
}export default Register;