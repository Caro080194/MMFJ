import { createGlobalStyle } from "styled-components";

//Set some global CSS used for the website

const GlobalStyles = createGlobalStyle `
:root {
    /*Colors*/
    --primary-color: #EEF7FF;
    --secondary-color: #7AB2B2;
    --third-color: #4D869C;
    --fourth-color: #CDE8E5;
    --fith-color: #F7F36B;

    /*Typography*/
    --font-family:'Montserrat', sans-serif;

    /*Global styles*/
    body{
        font-family: var(--font-family);
        color: black;
        background-color: var(--primary-color);
        margin: 0;
        padding: 0;
        width: 100vw;
        overflow-x: hidden;
        box-sizing: border-box;
    }
}

`;

export default GlobalStyles;