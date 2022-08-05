import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {PostsPage} from "./pages/PostsPage";
import {NewPostPage} from "./pages/NewPostPage";
import {Header} from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='' element={<PostsPage/>}></Route>
                <Route path='/new' element={<NewPostPage/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
