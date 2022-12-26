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
        return res.data
    }
)
export const searchBlog = createAsyncThunk(
    'posts/search',
    async (payload) => {
        const res = await customAxios.get(`posts/find-by-name/?name=${payload.search}`)
        return res.data
    }
)

export const userDeletePosts = createAsyncThunk(
    'posts/deletePosts',
    async (payload) => {
        const res = await customAxios.delete(`posts/` + payload.id);
        return payload.id
    }
)
