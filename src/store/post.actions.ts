import {
    AddPostAction,
    FetchPostAction,
    FetchPostFailureAction,
    FetchPostsAction, FetchPostsFailureAction,
    FetchPostsSuccessAction, FetchPostSuccessAction,
    Post,
    PostsActionTypes
} from "../models/postModel";

export const fetchPosts = (): FetchPostsAction => {
    return {type: PostsActionTypes.FETCH_POSTS};
};

export const fetchPostsSuccess = (
    posts: Post[]
): FetchPostsSuccessAction => {
    return {
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: posts,
    };
};

export const fetchPostsFailure = (
    error: string
): FetchPostsFailureAction => {
    return {
        type: PostsActionTypes.FETCH_POSTS_FAILURE,
        payload: error,
    };
};

export const fetchPost = (params: {
    post_id: number;
}): FetchPostAction => {
    return {
        type: PostsActionTypes.FETCH_POST,
        payload: params,
    };
};

export const fetchPostSuccess = (
    post: Post
): FetchPostSuccessAction => {
    return {
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: post,
    };
};

export const fetchCategoryFailure = (
    error: string
): FetchPostFailureAction => {
    return {
        type: PostsActionTypes.FETCH_POST_FAILURE,
        payload: error,
    };
};
export const addPost = (params: {
                            post: Post;
                        }
): AddPostAction => {
    return {
        type: PostsActionTypes.ADD_POST,
        payload: params,
    };
};
