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
        &::-webkit-scrollbar
        {
            display: none;
        }
    }
    
    html{
        font-size: 62.5%;
    }

    ::-webkit-scrollbar-thumb{
        background-color: black;
    }

    body{
        overflow-x: hidden;
    }
`;

export default GlobalStyle;