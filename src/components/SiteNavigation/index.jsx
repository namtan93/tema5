import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Container from '../Container';

export const NavigationStyle = styled(Container)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #E2A3C7;
    margin: 0;

    ul {
        list-style: none;
    }

    li {
        display: inline-block;
        padding: .6em;
    }

    a {
        text-decoration: none; 
        color: black;
        border-bottom: 2px solid black;

        &:hover {
            border-bottom: 2px solid white;
            color: white;
        }
    }
`;

function SiteNavigation() {
    return (
        <NavigationStyle as="nav">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                </li>
            </ul>
        </NavigationStyle>
    )
};

export default SiteNavigation;
