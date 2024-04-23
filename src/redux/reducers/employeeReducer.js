import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let INTIIALSTATE={
    employeeData:[

    ],
    name:"",
    salary:0,
    department:"",
    updateToggle:false,
    Ids:""
}

export const getInitialStateAsync = createAsyncThunk("api/employee",
    ()=>{
    const data =  axios.get("http://localhost:4100/api/employee/getEmp")
    return data;
   }
)


export const addEmployeeAsync = createAsyncThunk("employee/addEmp",async (payload)=>{
    console.log(payload.name,"seee")
    try{
        const response = await fetch("http://localhost:4100/api/employee/addemployee", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
           
            body: JSON.stringify({
                name:payload.name,
                salary:payload.salary,
                department:payload.department
            })
        });
        console.log(response.json())
        return await response.json();
    }catch(err){
       console.log(err);
    }

})

export const deleteEmployeeAsync = createAsyncThunk("employee/deleteemploye", async (payload)=>{
    console.log(payload,"payload")
    const response = await fetch(`http://localhost:4100/api/employee/delEmp/${payload}`,{
        method:'DELETE',
    })
    return payload;
})

export const updataEmployeeAsync = createAsyncThunk("employee/update", async (payload)=>{
    const {name, salary, department, Ids} = payload;
    const response = await fetch(`http://localhost:4100/api/employee/updateemp/${Ids}`,{
        method:'PUT',
        body:JSON.stringify({
            name,
            salary,
            department
        }),
        headers:{
            'content-type':'application/json'
        }
    })
    return response.json();
})


const employeeSlice = createSlice({
    name:'employee',
    initialState:INTIIALSTATE,
    reducers:{
       setName:(state, action)=>{
        state.name = action.payload;
       },
       setSalary:(state, action)=>{
        state.salary = action.payload;
       }, 
        setDepartment:(state, action)=>{
        state.department = action.payload;
       },
       setUpdate:(state, action)=>{
        state.updateToggle = !state.updateToggle
       },
       setId:(state, action)=>{
        state.Ids = action.payload;
       },
    },

    extraReducers:(builder)=>{
         builder.addCase(getInitialStateAsync.fulfilled, (state, action)=>{
            console.log("getInitialState is loaded");

            state.employeeData = [...action.payload.data,]
            console.log(state.employeeData, "yo")
         })

         builder.addCase(addEmployeeAsync.fulfilled, (state, action)=>{
            state.employeeData.push(action.payload);
         })

         builder.addCase(deleteEmployeeAsync.fulfilled, (state, action)=>{
            state.employeeData = state.employeeData.filter((emp, key)=>
            emp.id !== action.payload
        )
         })

         builder.addCase(updataEmployeeAsync.fulfilled, (state, action)=>{
            const {name, salary, department, id} = action.payload;
            state.employeeData = state.employeeData.map((emp)=>(
                emp.id ===id ? {name:name, salary:salary, department:department} : emp
            ))
         })
    }
})

export const employeeReducer = employeeSlice.reducer;
export const actions = employeeSlice.actions;
export const employeeSelector = (state)=>state.employeeReducer;