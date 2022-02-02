import { createGlobalStyle } from "styled-components";
import backgroundImage from "./images/background-image.jpg";
export const GlobalStyle = createGlobalStyle`
body{
    background: url(${backgroundImage}) center;
    background-size: 100% 100%;
    color: #332c36;
    padding: 0px;
    margin: 0;
    font-family: Lobster, cursive;
}`;

