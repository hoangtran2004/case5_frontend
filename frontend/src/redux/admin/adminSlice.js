import {createSlice} from "@reduxjs/toolkit";
import {adminDeletePost, adminDeleteUser, adminGetBlog} from "../../services/adminService";
import {adminGetUser} from "../../services/adminService";

const initialState = {
    admin: []
}
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(adminGetBlog.fulfilled, (state, action) => {
            state.admin = action.payload
        });
        builder.addCase(adminGetUser.fulfilled, (state, action) => {
            state.admin = action.payload
        });
        builder.addCase(adminDeleteUser.fulfilled, (state, action) => {
            let newArr = [...state.admin]
            let index = newArr.findIndex(item => item.id === action.meta.arg.id);
            newArr.splice(index, 1);
            state.admin = newArr
        });
        builder.addCase(adminDeletePost.fulfilled, (state, action) => {
            let newArr = [...state.admin]
            let index = newArr.findIndex(item => item.id === action.meta.arg.id);
            newArr.splice(index, 1);
            state.admin = newArr
        });
    }
})
export default adminSlice.reducer