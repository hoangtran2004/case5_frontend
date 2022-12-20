import {createSlice} from "@reduxjs/toolkit";
import {getBlogs} from "../../pages/services/blogService";

const initialState ={
    blogs:[]
}

const blogsSlice = createSlice({
    name:'blogs',  //tên của 1 state nhỏ ben trong store
    initialState,
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled,(state, action)=>{
            state.blogs = action.payload;
        })
    }
})
export default blogsSlice.reducer