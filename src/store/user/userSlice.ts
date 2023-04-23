import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface UserState{
    id:number;
    username:string;
    email:string;
}


const initialState:UserState={
    id:1,
    username:"joseph",
    email:"joseph@gmail.com"
}
 export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUsername:(state,action:PayloadAction<string>)=>{
            state.username=action.payload;
        },
        updateEmail:(state,action:PayloadAction<string>)=>{
           state.email=action.payload;
        }
    }
 })



 export const {updateUsername ,updateEmail}= userSlice.actions;
 export default userSlice.reducer;