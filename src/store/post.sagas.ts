import {FetchPostsAction, PostsActionTypes} from "../models/postModel";
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {fetchPosts} from "../utils/fetchPosts";
import {fetchPostsFailure, fetchPostsSuccess} from "./post.actions";

export function* fetchPostsAsync(action: FetchPostsAction) {
    try {
        const data = yield call(fetchPosts)
        yield put(fetchPostsSuccess(data));
    } catch (e) {
        yield put(fetchPostsFailure(e.message));
    }
}

export function* fetchPostsSaga() {
    yield takeLatest(
        PostsActionTypes.FETCH_POSTS,
        fetchPostsAsync
    );
}

export function* postsSaga() {
    yield all([call(fetchPostsSaga)]);
}
