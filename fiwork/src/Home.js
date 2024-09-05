import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "./images/img1.jpg";


function Home(){
  return(
    <>
<div className="home">
 
<div className="home1 ">
     <Navbar/>
</div>

<div className="home2 item">
  <img src={img1} style={{}}/>
  <div className="overlay">
    <div className="content">
      <h1>
      Your work awaits discovery.
      </h1>
      <h2> Let's find it.</h2>
    </div>
  </div>
</div>
<div className="home3 item">
  <h4>Service</h4>
 <h5>

 "Find Work" connects providers and seekers, supports all job types, and awards ratings for excellence.  </h5>
</div>

 <div className="home4 ">

<div style={{padding:"6%"}} >
  <div style={{display:"flex"}}>
<FontAwesomeIcon icon={faPhone} size="2x" style={{marginRight:"5%"}}/>
<p>+91 7075428693</p>
</div>
<div style={{display:"flex"}}>
<FontAwesomeIcon icon={faEnvelope} size="2x" style={{marginRight:"5%"}}/>
<p>msreddy7075@gmail.com</p>
</div>
<div style={{display:"flex"}}>
<FontAwesomeIcon icon={faLocationDot} style={{marginRight:"5%"}} size="2x"/>
<p>Mokila,Hyderabad,Telangana</p>

</div>
</div>



<div className="item">
<a href="https://www.facebook.com/dhonnapati.madhu" target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon icon={faFacebook} size="2x" style={{margin:"10px"}}/>
</a>
<a  href="https://instagram.com/ms_reddy16" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faInstagram} size="2x" style={{margin:"10px", color: "#E4405F"}}/> 

</a>


</div>
 </div>
<div className="home5 item">
  <Footer/>
</div>
</div>
    </>
  );
}
export default Home;