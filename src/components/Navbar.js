import React from 'react'
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">

        <p className="text-white font-bold text-center">
          EMPLOYEE MANAGEMENT SYSTEM
        </p>
        
        {(localStorage.getItem("jwtToken")!=null) &&
        <p className=" text-white font-bold fixed right-0 pr-8 float-right mr-4">Admin : Likhitha Koppula</p>}

        <FaPowerOff className="fixed right-0 text-white mr-3 hover:cursor-pointer" onClick={() => navigate("/loginUser")}/>
      </div>
    </div>
  )
}

export default Navbar;
