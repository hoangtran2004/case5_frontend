import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../pages/services/userService";
import {register} from "../../pages/services/userService";

const initialState = {
    currentUser:{}
}
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log(action.payload.data)
            state.currentUser = action.payload.data;
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.currentUser = action.payload;
        })
    }
})
export default userSlice.reducer