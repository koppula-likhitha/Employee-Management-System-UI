import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import Register from './components/Register';
import UserLogin from './components/UserLogin';
import AllEmployeesList from './components/AllEmployeesList';

function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>

       <Routes>
        {/* <Route index element={<EmployeeList/>}></Route> */}
        <Route path="/" element={<Register/>}></Route>
        <Route path="/employeeList" element={<AllEmployeesList/>}></Route>
        <Route path="/employeeListForUser" element={<EmployeeList/>}></Route>
        <Route path="/addEmployee" element={<AddEmployee/>}></Route>
        <Route path="/editEmployee/:id" element={<UpdateEmployee/>}></Route>
        <Route path="/registerUser" element={<Register/>}></Route>
        <Route path="/loginUser" element={<UserLogin/>}></Route>
       </Routes>

    </BrowserRouter>
    
    </>
    
  );
}

export default App;
