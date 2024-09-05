import React from 'react';
import { useState,useEffect } from 'react';


function ProviderWorks(){

    const [userdata,setuserdata]=useState([]);
    const fetdata= ()=>{  fetch("http://localhost:8080/api/fbu")
    .then(res => res.json())
    .then((result) => {
        setuserdata(result);
    })
    .catch((error) => {
        console.error('Error fetching user data:', error);
        setuserdata([]); // Set userdata to an empty array in case of an error
});
};
useEffect(()=>{
fetdata();
},[]);

const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/deldata/${id}`, {
        method: "DELETE"
    }).then(() => {
        console.log("data deleted");
        fetdata();
    })
};

    return(
        <>
        <div>
        <h2>My Works:</h2>
        <div className='row'>
        {userdata.map(dat=>(
            <>
            <div className="col-sm-12 col-md-6 col-lg-4">
             <div  className="card h-100"  >
  <div className="card-body">
    <h5 className="card-title">{dat.wtitle}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{dat.stitle}</h6>
   
    <h5>Work Description</h5>
    <p className="card-text">  {dat.descri}</p>
    <h5>Conditions</h5>
    <p className="card-text">{dat.lim}</p>
    <h5>Price</h5>
    <p className="card-text">{dat.price}</p>
    <button type="button" class="btn btn-outline-danger" onClick={()=>handleDelete(dat.id)}>Delete</button>
    {/* 
   <button onClick={()=>handleDelete(dat.id)}> Delete </button>
   */}
   
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
export default ProviderWorks;