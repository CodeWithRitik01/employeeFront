import { actions, deleteEmployeeAsync, getInitialStateAsync } from "../redux/reducers/employeeReducer.js"
import { employeeSelector } from "../redux/reducers/employeeReducer.js"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./employeeList.module.css";
function EmployeeList(){
    const {employeeData} = useSelector(employeeSelector);
    const dispatch = useDispatch();
    useEffect(() =>{
       dispatch(getInitialStateAsync());
    },[])

    const handleClick = (id) =>{
         console.log(id,"clicked")
         dispatch(deleteEmployeeAsync(id));
    }

    const handleUpdate = (name, salary, department, id)=>{
        console.log(name, salary, department,"update")
        dispatch(actions.setName(name));
        dispatch(actions.setSalary(salary));
        dispatch(actions.setDepartment(department));
        dispatch(actions.setId(id));

    }

    return(
        <div className={styles.empList}>
            
            <ul>
                {employeeData.map((emp, index)=>(
                    <>
                        <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{emp.name}</h5>
                            <div>
                            <NavLink to="/update"><button className={styles.updateButton} onClick={()=>handleUpdate(emp.name, emp.salary, emp.department, emp.id)}>update</button></NavLink>
                            <small onClick={()=>handleClick(emp.id)}>Delete</small>
                            </div>
                          
                            
                        </div>
                        <p class="mb-1">{emp.salary}</p>
                        <small>{emp.department}</small>
                        </a>
                        </div><br />
                    </>
           
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;