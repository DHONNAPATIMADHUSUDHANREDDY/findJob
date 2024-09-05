import { TextField } from "@mui/material";
import React, { useState } from "react";
import Signin from "./Signin"; 
import './Sign.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { useNavigate } from "react-router-dom";
function Signup(){
const [name,setname]=useState('');
const [username,setusername]=useState('');
const [mails,setmails]=useState('');
const [password,setpassword]=useState('');
const [phone,setphone]=useState('');


const navigate=useNavigate();
const handleSubmit=async (e)=>{
    e.preventDefault();
const login={name,username,mails,password,phone}
console.log(login);

const response= await fetch("http://localhost:8080/log/pdata",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(login)
 })
 if(response.ok){
    alert("Account Created");
    navigate("/Signin");

 }else{
    alert("Account not Created");
 }

}


    return(
        <>

        <div className="Signup">


<div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
      <form onSubmit={handleSubmit} >
      <h3 style={{textAlign:"center",padding:"2%"}}>Sign Up</h3>
        <div className="row">
       
        <TextField  className="mb-4 col-md-6 col-sm-12 col-lg-6" id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>setname(e.target.value)}/>
    
        <TextField className="  mb-4 col-md-6 col-sm-12 col-lg-6"id="outlined-basic" label="User Name" variant="outlined" value={username} onChange={(e)=>setusername(e.target.value)} />
        <TextField className="mb-4 col-md-6 col-sm-12 col-lg-6" id="outlined-basic" label="Mail Id" variant="outlined" value={mails} onChange={(e)=>setmails(e.target.value)}/>
        <TextField className="mb-4 col-md-6 col-sm-12 col-lg-6"id="outlined-basic" label="Phone Number" variant="outlined" value={phone} onChange={(e)=>setphone(e.target.value)} />
        <TextField className=" mb-4 col-md-6 col-sm-12 col-lg-6"id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setpassword(e.target.value)}  />
        </div>
        <div style={{textAlign:"center"}}>
        <Button  type='submit'  variant="contained" >
        Sign Up
      </Button>
      </div>
      
      </form>
      </div>
      </div>
        {/*
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="text" placeholder="User Name" value={username} onChange={(e)=>setusername(e.target.value)}/>
            <input type="text" placeholder="Enter Mail id " value={mails} onChange={(e)=>setmails(e.target.value)}/>
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e)=>setphone(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            
            <button type="submit" >Submit</button>
        </form>
    */}
        </>
    );
}
export default Signup;