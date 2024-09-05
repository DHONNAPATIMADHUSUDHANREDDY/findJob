import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Jobp.css";
import Navbar from './Navbar';
import Apply from './Apply';
import { Link } from 'react-router-dom';

function JobNeeded(){
    const [tdata,settdata]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/details")
        .then(res=>res.json())
        .then((result)=>{
            settdata(result);
        })
    },[])

  
    
    return(
        <>
        <Navbar/>
        
        <div  > 
        Available Works
        <div className="row">
        {tdata.map(dat=>(
            <>
            <div key={dat.id}  className="col-md-6 col-sm-12 col-lg-4 mb-4">
             <div className="card h-100" >
  <div className="card-body ">
    <h5 className="card-title">{dat.wtitle}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{dat.stitle}</h6>
    <h5>Work Description</h5>
    <p className="card-text">  {dat.descri}</p>
    <h5>Conditions</h5>
    <p className="card-text">{dat.lim}</p>
    <h5>Price</h5>
    <p className="card-text">{dat.price}</p>

   {/* <Link to="/Apply"> <button >Apply</button></Link>*/}
  
  <Link to={`/Apply/${dat.id}`}> <button type="button" class="btn btn-outline-success">Apply</button></Link>
 
  </div>
</div>
</div>
                     
 </>
        ))}
        </div>
     </div>   
        </>

      
    );
}
export default JobNeeded;