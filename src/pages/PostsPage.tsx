import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts} from "../store/post.selector";
import {fetchPosts} from "../store/post.actions";
import styled from "styled-components";

export const PostsPage: React.FC = () => {
    const StyledPost = styled.div`
    display: flex;
    flex-direction: column`
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div>
            {posts.map(p => (
                <StyledPost>
                    {p.title}
                    {p.body}
                </StyledPost>
            ))}
        </div>
    )
}
