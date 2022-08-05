import React, {useCallback, useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addPost} from "../utils/fetchPosts";
import {Post} from "../models/postModel";

export const NewPostPage: React.FC = () => {
    const StyledInput = styled( "input" )`
	border: 1px solid #ccc;
	box-sizing: border-box;
	border-radius: 4px;
	width: 100%;
	margin-right: 20px;
`;

    const [ text, setText ] = useState<string>( "" );
    const dispatch = useDispatch()
    export const handleCreate = useCallback((e:React.FormEventHandler<HTMLFormElement>) => {
        // e.preventDefault();
        setText( "" );
        let post: Post = {
            title: text,
            body: text,
            userId: 1
        }
        dispatch(addPost(post))
    },[ ])
}
    return (
        <div>
            New post
            <form
                onSubmit={ handleCreate }
                style={ { width: "100%", display: "flex", justifyContent: "space-between" } }
            >
                <StyledInput
                    value={ text }
                    size="small"
                    type="text"
                    placeholder="Enter text"
                    onChange={ ( e ) =>
                    {
                        setText( e.target.value );
                    } }
                ></StyledInput>


                <Button  variant="contained" type="submit">
                    Create
                </Button>
            </form>
        </div>
    )
}
