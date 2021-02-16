import React from 'react';
import styled from 'styled-components';

export const PostLinkBase = styled.a`
    display: block;
    background-color: #F7EDE2;
    border: 2px solid grey;
    border-radius: 10px;
    max-width: 400px;
    padding: .5em;
    margin: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    color: black;
    text-decoration: none;
    text-align: center;
    
    &:hover {
        border-color: #D67AB1;
        background-color: #D67AB1;
        transform: scale(1.2);
        transition: .7s;
    }
`;

export const PostLinkTitle = styled.span`
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
`;

export const PostLinkDate = styled.span`
    display: block;
`;

function PostLink({ title, date, url }) {
    return (
        <PostLinkBase href={url}>
            <PostLinkTitle> {title}</PostLinkTitle>
            <PostLinkDate>{date}</PostLinkDate>
        </PostLinkBase>
    )
}

export default PostLink;