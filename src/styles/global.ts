import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

html,
body,
#root{
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
}

body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    /* background: #4392e1; */
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

    font-family: 'Montserrat', sans-serif;
    color: #000;
}

button{
    cursor: pointer;
}
`;
