import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accountBalance : 0
}

const accountSlice = createSlice({
    name : "account",
    initialState,
    reducers : {
        deposite : (state,action)=>{
            state.accountBalance += action.payload;
        },
        withdrawl : (state , action)=>{
            state.accountBalance -= action.payload;
        }
    }
});

export const { deposite , withdrawl } = accountSlice.actions;
export default accountSlice.reducer;