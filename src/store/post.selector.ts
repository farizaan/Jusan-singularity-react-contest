import { createSelector } from 'reselect';
import {RootState, } from "./store";
const selectPostsState = (state: RootState) => state.posts;

export const selectPosts= createSelector(
    [selectPostsState],
    (postsState) => postsState
);
