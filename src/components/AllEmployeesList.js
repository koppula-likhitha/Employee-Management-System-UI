import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getEmployees, saveEmployee } from '../services/EmployeeService';
import Employee from './Employee';
import { deleteEmployeeinBackend } from '../services/EmployeeService';
import { getAllEmployees } from '../services/EmployeeService';

const EmployeeList = () => {

    const navigate = useNavigate();

    const [employees,setEmployees] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        console.log("fetcg")
        setLoading(true);
        try{
          
          const response=await getAllEmployees();
          console.log(response)
          setEmployees(response.data);

        }catch(error){
            console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    },[]);

    const deleteEmployee = (e,id) => {
        e.preventDefault();
        deleteEmployeeinBackend(id).then((res) => {
           if(employees){
            setEmployees((prevElement) => {
                return prevElement.filter((employee) => employee.id !== id)
            });
           }
        });
    }

  return (
   <div className="container mx-8 my-8">
   {/* <div className="h-12">
    <button 
    onClick={() => navigate("/addEmployee")}
    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add Employee</button>
   </div> */}

   <div className="flex shadow border-b">
    <table className="min-w-full">
        <thead className="bg-gray-100">
            <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email ID</th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
            </tr>
        </thead>
       {!loading && ( 
        <tbody className="bg-white">
            {employees && employees.map((employee) => (
           <Employee employee={employee} deleteEmployee= {deleteEmployee} key={employee.id}></Employee>
           ) )}
        </tbody>
       )}
    </table>
   </div>
   </div>
  )
}

export default EmployeeList;