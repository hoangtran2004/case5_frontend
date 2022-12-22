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
export const searchBlog = createAsyncThunk(
    'posts/search',
    async (payload) => {
        console.log(payload)
        const res = await customAxios.get(`posts/find-by-name/?name=${payload.search}`)
        console.log(res.data)
        return res.data
    }
)
