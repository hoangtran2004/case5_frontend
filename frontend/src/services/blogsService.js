import customAxios from "./api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk(
    'posts',
    async () => {
        const res = await customAxios.get('posts');
        return res.data
    }
)
export const addBlogs = createAsyncThunk(
    'posts/add',
    async (data) => {
        const res = await customAxios.post('posts/add', data)
        return data
    }
)