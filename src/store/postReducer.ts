import {createSlice} from "@reduxjs/toolkit";
import {PostState} from "../models/postModel";

const initialState: PostState = {
    posts: [],
    post: null
}

export const postReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {


    }

})

export default  postReducer.reducer
