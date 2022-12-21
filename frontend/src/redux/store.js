import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogSlice";
import adminReducer from "./admin/adminSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        admin: adminReducer,
        user: userReducer
    }
})