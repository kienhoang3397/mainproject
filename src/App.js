
import "./index.css";

import {  RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./router";
import Test from "./assets/Test";
import DashBoard from "./pages/DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "./redux/slice/apiRequest";





function App() {
 

  return (
   
    <>
 
  <RouterProvider router={router}/>
  
    
    </>
  )
}

export default App;
