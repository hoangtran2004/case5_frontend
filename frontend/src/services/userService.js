import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const login = createAsyncThunk (
    'auth/login',
    async (data)=>{
        const res= await axios.post('http://localhost:8080/auth/login',data);
        return res
    }
)
export const register = createAsyncThunk (
    'auth/register',
    async (data)=>{
        const res= await axios.post('http://localhost:8080/auth/register',data);
        return res.data
    }
)
export const updateUser = createAsyncThunk (
    'auth/updateUser',
    async (data)=>{
        const res= await axios.post('http://localhost:8080/auth/register',data);
        return res.data
    }
)