import {configureStore} from '@reduxjs/toolkit'
import {applyMiddleware} from "redux"
import postReducer from './postReducer'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
        reducer: postReducer,
    },

)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
