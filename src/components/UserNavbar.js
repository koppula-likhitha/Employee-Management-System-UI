import React from 'react'
import { FaUser } from "react-icons/fa";

const UserNavbar = () => {
  return (
    <>
     <div>
       
        <p className=" text-black mt-3 font-bold fixed right-0 pr-8 float-right mr-4">LoggedIn User : Sowmya</p>

        {/* <FaPowerOff className="fixed right-0 text-white mr-3 hover:cursor-pointer" onClick={() => navigate("/loginUser")}/> */}
      </div>
    </>
  )
}

export default UserNavbar