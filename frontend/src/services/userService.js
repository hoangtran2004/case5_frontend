import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk (
    'auth/login',
    async (data)=>{
        const res= await axios.post('http://localhost:8080/auth/login',data);
        console.log("use",res.data)
        return res
    }
)
export const register = createAsyncThunk (
    'auth/register',
    async (data)=>{
        const res= await axios.post('http://localhost:8080/auth/register',data);
        console.log("register",res)
        return res.data
    }
)