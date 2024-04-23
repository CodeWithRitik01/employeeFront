import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "../reducers/employeeReducer";

export const store = configureStore({
    reducer:{
        employeeReducer
    }
})