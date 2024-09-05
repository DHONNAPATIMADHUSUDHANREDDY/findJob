
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import JobProvider from './JobProvider';
import JobNeeded from './JobNeeded';
import Navbar from './Navbar';
import Apply from './Apply';
import Signin from './Signin';
import Signup from './Signup';
import Employs from './Employs';
import ProviderWorks from './ProviderWorks';

function Routing(){
    return(
        <>
<Router>

     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/JobProvider" element={<JobProvider/>}/>
        <Route path="ProviderWorks" element={<ProviderWorks/>}/>
        <Route path="/JobNeeded" element={<JobNeeded/>}/>
        <Route path="/Apply/:findWorkId" element={<Apply/>}/>
        <Route path="/Employs" element={<Employs/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/Home" element={<Home/>}/>
        

       
     </Routes>
</Router>
        </>
    );
}
export default Routing;