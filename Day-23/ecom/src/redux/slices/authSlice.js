import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        auth : localStorage.getItem("auth")  ? true : false,
        role : localStorage.getItem("role")  ? localStorage.getItem("role") : null,
    },
    reducers : {
        login : (state , action)=>{
            state.auth = true;
            state.role = action.payload;
        },
        logout : (state,action)=>{
            state.auth = false;
            state.role = null;
        }
    }
});

export const { login , logout } = authSlice.actions;
export default authSlice.reducer;