import {configureStore} from '@reduxjs/toolkit'
import {applyMiddleware, createStore} from "redux"
import postReducer from './postReducer'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {postsSaga} from "./post.sagas";

const sagaMiddleware = createSagaMiddleware();

export const crStore = createStore(
    postReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export const store = configureStore({
        reducer: postReducer,
    }
)

sagaMiddleware.run(postsSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
