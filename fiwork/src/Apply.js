
import { useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar';
import { Navigate } from "react-router-dom";

function Apply(){
    const [name,setname]=useState("");
    const [mail,setmail]=useState("");
    const [phone,setphone]=useState("");
    const { findWorkId } = useParams();

    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
    e.preventDefault();
    const applydetails={name,mail,phone};
    console.log(applydetails);
    const response= await fetch(`http://localhost:8080/apply/applypost/${findWorkId}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(applydetails)
    });
    if(response.ok){
        alert("applied Succesfull");
    }else{
        alert("Application not registered");
    }
    navigate("/Jobneeded");
    }
    return(
        <>

<div style={{display:"flex",alignItems:"center",justifyContent:"center" ,height:'100vh'}}>

       <div style={{padding:"10%"}} >
        <form onSubmit={handleSubmit} autoComplete="off">
       <div >
        <label for="exampleInputEmail1" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setname(e.target.value)}/>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={mail} onChange={(e)=>setmail(e.target.value)}/>
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={phone} onChange={(e)=>setphone(e.target.value)}/>
        </div> 
        <button type="submit" class="btn btn-outline-success">Submit</button>                                                       
        </div>
        </form>
        </div>
        </div>
        </>
    );
}
export default Apply;
