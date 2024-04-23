import './App.css';
import Navbar from './navbar/navbar';
import EmployeeForm from './emplyeeForm/employeeForm';
import EmployeeList from './employeeList/exployeeList';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import UpdateEmployee from './updateForm/updateForm';

function App() {
  const router = createBrowserRouter([
    {path:'/',
  element:<Navbar />,
children:[
  {index:true, element:<EmployeeList />},
  {path:'employee', element:<EmployeeForm />,},
  {path:'update', element:<UpdateEmployee />}
]}
])

  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
