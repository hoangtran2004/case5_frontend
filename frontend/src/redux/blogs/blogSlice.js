import {createSlice} from "@reduxjs/toolkit";
import {addBlogs, getBlogs, searchBlog, userDeletePosts} from "../../services/blogsService";

const initialState = {
    blogs: []
}
const blogSlices = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        });
        builder.addCase(searchBlog.fulfilled, (state, action) => {
            state.blogs = [...action.payload]
        });
        builder.addCase(userDeletePosts.fulfilled, (state, action) => {
            let index = state.blogs.findIndex(item => item.id === action.payload)
            state.blogs.slice(index, 1);
        });
        builder.addCase(addBlogs.fulfilled,(state,action)=>{

        })
    }

})
export default blogSlices.reducer