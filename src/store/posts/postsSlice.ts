import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPostsThunk } from "./postsThunk";


export type Post={
    id:number;
    title:string;
}



export interface PostState {
    posts:Post[];
    loading:boolean;
}

const initialState : PostState = {
    posts:[],
    loading:false
}


export const postsSlice=createSlice({
    name: 'posts',
    initialState,
    reducers:{
  setLoading:(state,action:PayloadAction<boolean>)=>{
    state.loading = action.payload
  }
    },
    extraReducers:(builder)=>{
  


        builder
          .addCase(fetchPostsThunk.pending,(state)=>{
            state.loading=true
          })
          .addCase(fetchPostsThunk.fulfilled, (state, action) => {
            console.log("fetchPostsThunk.fulfilled");
            console.log(action.payload.data);
            state.posts = action.payload.data;
          });
    }
})

export const {setLoading}=postsSlice.actions;
export default postsSlice.reducer;


