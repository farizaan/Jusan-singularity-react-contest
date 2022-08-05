export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,
}
export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POST = 'FETCH_POST ',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS ',
    FETCH_POST_FAILURE = 'FETCH_POST_FAILURE ',
    ADD_POST = "ADD_POST"
}

export interface PostState {
    posts: Post[],
    post: Post | null,
    loading?: boolean,
    error?: string
}

export interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;

}

export interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: Post[];
}

export interface FetchPostsFailureAction {
    type: PostsActionTypes.FETCH_POSTS_FAILURE;
    payload: string;
}

export interface FetchPostAction {
    type: PostsActionTypes.FETCH_POST;
    payload: {
        post_id: number;
    };
}

export interface FetchPostSuccessAction {
    type: PostsActionTypes.FETCH_POST_SUCCESS;
    payload: Post;
}

export interface FetchPostFailureAction {
    type: PostsActionTypes.FETCH_POST_FAILURE;
    payload: string;
}
export interface AddPostAction {
    type: PostsActionTypes.ADD_POST;
    payload: {
        post: Post
    };
}

export type PostsAction =
    | FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsFailureAction
    | FetchPostAction
    | FetchPostSuccessAction
    | FetchPostFailureAction
    | AddPostAction;
