import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
   

.container .btn-group {
  position: absolute;
  
  right: 10px; /* Adjust the distance from the right as needed */
}



`;
