import axios from "axios";

const EMPLOYEE_API_BASE_URL ="http://localhost:8081/api/v1/employees";
const USER_API_BASE_URL ="http://localhost:8081/api/v1/users";

const token = localStorage.getItem("jwtToken");

export const saveEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL + "/employeesForUser",employee,
      {
         headers: {
           'Authorization': `${token}`
         }
       }
      );
   }

export const getEmployees= () => {
    console.log("asdfdgdfsg")
    return axios.get(EMPLOYEE_API_BASE_URL+ "/employeesForUser",
      {
         headers: {
           'Authorization': `${token}`
         }
       }
      );
   }

   export const getAllEmployees= () => {
    console.log("asdfdgdfsg")
    return axios.get(EMPLOYEE_API_BASE_URL,
      {
         headers: {
           'Authorization': `${token}`
         }
       }
      );
   }

 export const deleteEmployeeinBackend = (id) => {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
     );
   
 }  

 export const getEmployeeById = (id) => {
    return axios.get(EMPLOYEE_API_BASE_URL+"/" + id,
     {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    } );
 }

 export const updateEmployeeinBackend =(employee,id) => {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    } );
 }

 export const registerUserinBackend = (user) =>{
   return axios.post(USER_API_BASE_URL,user);
 }

 export const validateUserinBackend=(user) => {
   return axios.post(USER_API_BASE_URL+"/validateUser" ,user);
 }

 export const authenticateUserInBackend=(user) =>{
   return axios.post(USER_API_BASE_URL + "/authenticate", user );
 }

