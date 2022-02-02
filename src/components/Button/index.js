import { string } from 'prop-types';
import styled from 'styled-components';
export const Button = styled.button`
    background: gray;
    color: white;
    border: none;
    font-size: 1.5em;
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: #333 3px 3px;
    border-radius: 3px;
    font-family: 'Lobster', cursive;
    &:hover {
        background: black;
    }
`;