import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: fantasy;
    margin: 0;
    padding: 0
}

html, body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
    background-color: #FDF7FA;
}

html {
    font-size: 1.2rem;
}


.popup a {
    color: #0197F6;
    font-size: .9rem;
    margin-top: 10px;
    display: block;
}

.popup img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 80%;
    height: 80%
}
`;

export default GlobalStyle;