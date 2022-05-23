import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color:#1d1d1d;
    }
`;
