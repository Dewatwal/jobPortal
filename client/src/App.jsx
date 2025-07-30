import React, { useContext } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import Recruiterlogin from "./components/Recruiterlogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Addjob from "./pages/Addjob";
import Managejobs from "./pages/Managejobs";
import Viewapplications from "./pages/Viewapplications";
import 'quill/dist/quill.snow.css'
const App = ()=>{
  const {showRecruiterLogin} =useContext(AppContext)
  return (

    <div>
      { showRecruiterLogin && <Recruiterlogin />}
       <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/apply-job/:id' element={<Applyjob/>}/>
         <Route path='/applications' element={<Applications/>}/>
         <Route path="/dashboard" element={<Dashboard/>}>
         <Route path="add-job" element={<Addjob/>}/>
         <Route path="manage-jobs" element={<Managejobs/>}/>
         <Route path="view-applications" element={<Viewapplications/>}/>
         </Route>
       </Routes>
    </div>
  );
}
export default App