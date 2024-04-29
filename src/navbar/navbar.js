import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { actions, employeeSelector } from "../redux/reducers/employeeReducer";

function Navbar(){
    const dispatch = useDispatch();
    const {searchDet} = useSelector(employeeSelector)

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(actions.setSearchClick());
    }
   return(
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/employee">Add Employee</a>
            </li>
         
        </ul>
        <form class="d-flex" role="search" onSubmit={handleSubmit}>
            <input class="form-control me-2" onChange={(e)=>dispatch(actions.setSearch(e.target.value))} type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    <Outlet />
    </>

   )
}

export default Navbar;
