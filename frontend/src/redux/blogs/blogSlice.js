import {createSlice} from "@reduxjs/toolkit";
import {getBlogs} from "../../services/blogsService";

const initialState = {
    blogs: []
}
const blogSlices = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
          state.blogs=action.payload
        })
    }

})
export default blogSlices.reducer