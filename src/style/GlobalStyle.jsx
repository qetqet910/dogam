import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;

    }
    html{
        font-size: 62.5%;
    }
    ::-webkit-scrollbar{
        width: 8px;
        height: 8px;
        background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
    body{
        overflow-x: hidden;
    }
`;

export default GlobalStyle;