import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Employs from './Employs';
import ProviderWorks from './ProviderWorks';


import Navbar from './Navbar';

function JobProvider(){

    const [descri,setdescri]=useState('');
    const [price,setprice]=useState('');
    const [lim,setlim]=useState('');
    const [wtitle,settitle]=useState('');
    const [stitle,ssettitle]=useState('');
    const [userdata,setuserdata]=useState([]);
   
   // const [apply,setApply]=useState([]);
   // const [currentUsername, setCurrentUsername] = useState('');
    

    const handleChange=async (e)=>{
        e.preventDefault();
        const tdata={descri,price,lim,wtitle,stitle};
        console.log(tdata);
        
      const response=await  fetch("http://localhost:8080/api/addData",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(tdata)
        })
        if(response.ok){
            alert("Job Registered Sucessfully");
        }else{
            alert("Job Not Registered");
        }
    }

  
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


/*

const fetchApplyData = () => {
    fetch("http://localhost:8080/apply/providerApplications")
        .then(res => res.json())
        .then(result => setApply(result))
        .catch(error => console.error('Error fetching apply data:', error));
};

useEffect(() => {
    fetchApplyData();
}, []);

*/
    return(
        <>
        <Navbar/>
  
        <div>
        <form className='row' style={{marginTop:"5%"}} autoComplete='off'>
           <div  >
        <TextField className="col-sm-12 col-md-12 col-lg-6 col-xs-12  mb-4" style={{maxWidth:"100%"}}  id="filled-basic" label="Title" variant="filled" value={wtitle} onChange={(e)=>settitle(e.target.value)} />
        <TextField className="col-sm-12 col-md-12 col-lg-6 col-xs-12  mb-4" id="filled-basic" label="Sub Title" variant="filled" value={stitle} onChange={(e)=>ssettitle(e.target.value)} />
        <TextField
        className='col-sm-12 col-md-12 col-lg-12 mb-4'
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={10}
          inputProps={{ cols: 50 }}
          value={descri} onChange={(e)=>setdescri(e.target.value)}
        />
         <TextField className='col-sm-12 col-md-6 col-lg-6 mb-4'
          id="outlined-multiline-flexible"
          label="Conditions"
          multiline
          maxRows={10}
          inputProps={{ cols: 50 }}
          value={lim} onChange={(e)=>setlim(e.target.value)}
        />
         <TextField className="col-sm-12 col-md-6 col-lg-6  mb-4" id="filled-basic" label="Price" variant="filled" value={price} onChange={(e)=>setprice(e.target.value)} />
        
     
         <Button type='submit' onClick={handleChange} variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>
   
      </div>
      </form>
        </div>


        <div style={{marginTop:"20px"}}>
        <Link to="/ProviderWorks"> <Button variant="contained" color="success">My Works</Button></Link>
        
        <Link to="/Employs"> <Button variant="contained" color="success"> Who Applied ?</Button></Link>

              </div>

        {/* 
       <div>
        <h2>My Works:</h2>
        {userdata.map(dat=>(
            <>
             <div  className="card"  style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{dat.wtitle}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{dat.stitle}</h6>
    <p className="card-text">{dat.lim}</p>
    <p className="card-text">  {dat.descri}</p>
    <p className="card-text">{dat.price}</p>
   <button onClick={()=>handleDelete(dat.id)}> Delete </button>
   
  </div>
</div>
                     
 </>
        ))}
        
        </div>

      


        <div>
            <h2>who applied for the job</h2>
              
              <Link to="/Employs"> <Button variant="contained" color="success"> Success</Button></Link>
             
 


            {apply.map(data=>(
                <>
                <div class="card"key={data.id} style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{data.phone}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{data.mail}</h6>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
                </>
            ))}
            
        </div>
        */}
   
    </>

    );
    
}
export default JobProvider;