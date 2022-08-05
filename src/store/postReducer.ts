import {createSlice} from "@reduxjs/toolkit";
import {PostsAction, PostsActionTypes, PostState} from "../models/postModel";

const initialState: PostState = {
    posts: [],
    post: null
}

const postsReducer = (state = initialState, action: PostsAction) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {
                ...state,
                loading: true,
            };
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };

        case PostsActionTypes.FETCH_POSTS_FAILURE:
        case PostsActionTypes.ADD_POST:
            return {
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
};

export default postsReducer;
