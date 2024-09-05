import React, { useEffect, useState } from 'react';
import JobProvider from './JobProvider';
import JobNeeded from './JobNeeded';
import Signin from "./Signin";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


function Navbar(){

  /*
  const [logdata,setLogdata]=useState("");
  const logdetails=()=>{
        fetch("http://localhost:8080/log/currentUser")
        .then(res=>res.json())
        .then((result)=>{
            setLogdata(result);
        })
  }
  useEffect(()=>{
    logdetails();
  },[]);
*/

  return(
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Find Work</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <Link className="nav-link"  to="/">Home</Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link"  to="/JobNeeded">JobNeeded</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link"  to="/JobProvider">JobProvider</Link>
        </li>

        
        <ul className="navbar-nav" > 
          <li className="nav-item ">
          <Link className="nav-link"  to="/Signin">Sign In</Link>
          </li>
        </ul>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#"></a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>
    </>
  );
}
export default Navbar;