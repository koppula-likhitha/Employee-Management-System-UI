import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUserinBackend } from '../services/EmployeeService';

const Register = () => {

    const [user,setUser]=useState({
        "id":"",
        "firstName" :"",
        "lastName" : "",
        "emailId" : "",
        "password" : "",
        "role" : ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name] : value}); //setting these values by using states
    }

    const registerUserinUI = async (e) => {
        if(e && e.preventDefault)
        {
        e.preventDefault(); //stopping page to refresh
        try{
       const response = await registerUserinBackend(user);
           console.log(response);
           navigate("/loginUser");
        }
        catch(error){
           console.log(error);
        };
    }
    }

    const reset = (e) =>{
        e.preventDefault(); //Dont want to refresh page

        setUser({
            "id":"",
            "firstName" :"",
            "lastName" : "",
            "emailId" : "",
            "password": "",
            "role": ""
        });
    }


  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
        <div className="px-8 py-8">

            <div className="font-thin text-2xl tracking-wider">
                <h1>Register User</h1>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input type="text" name = "firstName" value ={user.firstName} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input type="text" name = "lastName" value ={user.lastName} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input type="email" name = "emailId" value ={user.emailId} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Password</label>
                <input type="password" name = "password" value ={user.password} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Role</label>
                <input type="text" name = "role" value ={user.role} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white font-semibold  bg-green-400 py-2 px-6 hover:bg-green-700" onClick={registerUserinUI}>Register</button>
                <button className="rounded text-white font-semibold  bg-red-400 py-2 px-6 hover:bg-red-700 " onClick={reset}>Clear</button>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <span>
                <p>Already have an account?</p>
                <a href="/loginUser" className="hover:cursor-pointe text-blue-400">Login</a>
                </span>
                </div>

        </div>

    </div>
  )
}

export default Register