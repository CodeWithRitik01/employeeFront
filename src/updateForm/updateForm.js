import { useDispatch, useSelector } from "react-redux";
import { actions, employeeSelector, updataEmployeeAsync } from "../redux/reducers/employeeReducer";
import { Link, NavLink } from "react-router-dom";

function UpdateEmployee(){

    const dispatch = useDispatch();
    let {name, salary, department, Ids} = useSelector(employeeSelector)

    const handleUpdate = (e) =>{
        e.preventDefault();
        console.log(name, salary, department, Ids,"update")
        dispatch(updataEmployeeAsync({name, salary, department, Ids}))
    }
    return(
    <form onSubmit={handleUpdate}> 
    <h1 class="display-6">Update Employee Data</h1>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Employee Name</label>
            <input type="text" value={name}  onChange={(e)=>dispatch(actions.setName(e.target.value))} class="form-control" id="exampleInputEmail1"  />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Salary</label>
            <input type="text" value={salary} onChange={(e)=>dispatch(actions.setSalary(e.target.value))} class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Department</label>
            <input type="text" value={department} onChange={(e)=>dispatch(actions.setDepartment(e.target.value))} class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Upload profile picture</label>
            <input type="file" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
       

    </form>
    )
}

export default UpdateEmployee;