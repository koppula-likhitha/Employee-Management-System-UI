import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUserinBackend } from '../services/EmployeeService';
import { authenticateUserInBackend } from '../services/EmployeeService';

const UserLogin = () => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name] : value}); //setting these values by using states
    }
    const [user,setUser]=useState({
        "id":"",
        "emailId" : "",
        "password" : ""
    });

    const reset = (e) =>{
        e.preventDefault(); //Dont want to refresh page

        setUser({
            "id":"",
            "emailId" : "",
            "password": ""
        });
    }

    const [error,setError] = useState('');
    localStorage.setItem("jwtToken" , null);

    const loginUserinUI = async (e) => {
        if(e && e.preventDefault)
        {
        e.preventDefault(); //stopping page to refresh
        try{
       const response = await authenticateUserInBackend(user);
        localStorage.setItem("jwtToken", response.data.jwtToken);
           console.log(response.data.jwtToken);
           if(response.data.jwtToken != null)
           {
           navigate("/employeeListForUser");
           }
           else
           {
                setError('Invalid Credentials');
           }
        }
        catch(error){
           console.log(error);
           setError('Invalid credentials');
        };
    }
    }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
        <div className="px-8 py-8">

            <div className="font-thin text-2xl tracking-wider">
                <h1>Login User</h1>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input type="email" name = "emailId" value ={user.emailId} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Password</label>
                <input type="password" name = "password" value ={user.password} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>


            {/* <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            {error && <p className="text-red-500 text-left p-4 py-2">{error}</p>}
                <button className="rounded text-white font-semibold  bg-green-400 py-2 px-6 hover:bg-green-700" onClick={loginUserinUI}>Login</button>
                <button className="rounded text-white font-semibold  bg-red-400 py-2 px-6 hover:bg-red-700 " onClick={reset}>Cancel</button>
            </div> */}

            
               { error? <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-0 ml-0 mx-0 py-5">
                  <p className="text-red-500 text-left py-2 px-6">{error}</p>
                    <button className="rounded text-white font-semibold  bg-green-400 py-2 px-6 hover:bg-green-700" onClick={loginUserinUI}>Login</button>
                    <button className="rounded text-white font-semibold  bg-red-400 py-2 px-6 hover:bg-red-700 " onClick={reset}>Cancel</button>
                </div> : 
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold  bg-green-400 py-2 px-6 hover:bg-green-700" onClick={loginUserinUI}>Login</button>
                    <button className="rounded text-white font-semibold  bg-red-400 py-2 px-6 hover:bg-red-700 " onClick={reset}>Cancel</button>
                </div> 
            }

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <span>
                <p>Don't have an account?</p>
                <a href="/registerUser" className="hover:cursor-pointe text-blue-400">Register</a>
                </span>
                </div>

        </div>

    </div>
  )
}

export default UserLogin