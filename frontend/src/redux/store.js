import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogSlice";
import adminReducer from "./admin/adminSlice"
export const store=configureStore({
    reducer:{
        blogs:blogReducer,
        admin:adminReducer
    }
})