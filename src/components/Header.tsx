
import styled from "styled-components";
import React from "react";

export const Header: React.FC = () => {
    const Box = styled.div`
      display: flex;
    `
    return (
        <Box>
            <ul>
                <li>
                    <a href="/">Posts</a>
                </li>
                <li>
                    <a href="/new">New Post</a>
                </li>
            </ul>
        </Box>
    )
}
