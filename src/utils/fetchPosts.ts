import axios from "axios";
import {Post} from "../models/postModel";

export function fetchPosts(){
    axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
        .then(resp => {

        })
}
export function addPost(post:Post){
    axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
