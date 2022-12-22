import customAxios from "./api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const adminGetBlog = createAsyncThunk(
    'admin/posts',
    async () => {
        const res = await customAxios.get('posts');
        console.log(res)
        return res.data
    }
)
export const adminGetUser = createAsyncThunk(
    'admin/getUsers',
    async () => {
        const res = await customAxios.get('auth/users')
        return res.data
    }
)

export const adminDeleteUser = createAsyncThunk(
    'admin/deleteUSer',
    async (payload) => {
        const res = await customAxios.delete(`auth/` + payload.id);
        console.log(res);
        return res.data
    }
)

export const adminDeletePost = createAsyncThunk(
    'admin/deletePosts',
    async (payload) => {
        const res = await customAxios.delete(`posts/` + payload.id);
        console.log(res);
        return res.data
    }
)