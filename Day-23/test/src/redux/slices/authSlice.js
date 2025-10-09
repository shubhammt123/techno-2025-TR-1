import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        auth : false
    },
    reducers : {
        login : ()=>{

        }
    }
})

export const { login } = authSlice.actions;

export default authSlice.reducer;