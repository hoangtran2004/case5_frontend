import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../pages/services/userService";
import {register} from "../../pages/services/userService";

const initialState = {
    currenUser:{}
}
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currenUser = action.payload;
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.currenUser = action.payload;
        })
    }
})
export default userSlice.reducer