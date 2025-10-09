import { configureStore } from "@reduxjs/toolkit";
import accountReducers from "../slices/accountSlice";
import authReducers from "../slices/authSlice";

const store = configureStore({
    reducer : {
        account : accountReducers,
        auth : authReducers
    }
});

export default store;