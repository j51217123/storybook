import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  body {
    ${({ color, theme }) =>
        css`
            color: ${color || `${theme.colors.blue700}`};
        `}
    font-size: 14px;
  }

`;
