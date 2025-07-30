import React, { useContext } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import Recruiterlogin from "./components/Recruiterlogin";
import { AppContext } from "./context/AppContext";
const App = ()=>{
  const {showRecruiterLogin} =useContext(AppContext)
  return (

    <div>
      { showRecruiterLogin && <Recruiterlogin />}
       <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/apply-job/:id' element={<Applyjob/>}/>
         <Route path='/applications' element={<Applications/>}/>
       </Routes>
    </div>
  );
}
export default App