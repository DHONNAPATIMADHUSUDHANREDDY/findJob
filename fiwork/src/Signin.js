import React from "react";
import Home from "./Home";
import {useState} from "react";
import "./Sign.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Link,useNavigate} from 'react-router-dom';

import Navbar from "./Navbar";

function Signin(){
    
    const [username,setusername]=useState('');
    const [password,setpass]=useState('');
    
    const navigate=useNavigate();
   const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={username,password};
    console.log(data);

   
    const response=await fetch("http://localhost:8080/log/Finduser",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
        
    })
    if(response.ok){
        alert("Signin Sucessfull");
        navigate("/Home");
    }else{
        alert("Signin un sucessfull");
    }
    
   }
    return(
        <>
    
        <div className="sign1">
            <div className="sign2" >
<div style={{padding:"15%"}}>
            <form  onSubmit={handleSubmit} autocomplete="off">
                <div className="row">
                    <h2 style={{padding:"5%",textAlign:"center"}}>Login to Your Account </h2>
        <TextField className="mb-4" id="outlined-basic" label="User Name" variant="outlined" value={username} onChange={(e)=>setusername(e.target.value)}/>
        <TextField className="mb-4"  id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setpass(e.target.value)} />
        </div>
        <div style={{textAlign:"center"}}>
        <Button type='submit'  variant="contained" > Sign In</Button>
        </div>
      </form>
      </div>
            </div>
            <div className="sign3">
                <div style={{padding:"15%",textAlign:"center"}}>
                <h2 style={{padding:"5%"}}>New Here?</h2>
                <p  style={{padding:"5%"}}>Sign up and discover a great amount of new opportunities!</p>
               
               <Link to="/Signup">
                <Button  variant="contained" >Sign Up</Button></Link>
                </div>
            </div>
        </div>
        
       {/*
            <input type="text" placeholder="Enter User Name" value={username} onChange={(e)=>setusername(e.target.value)}/>
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setpass(e.target.value)}/>
            <button type="submit" >Submit</button>
 */}
       
       
   
        </>
    );
}
export default Signin;