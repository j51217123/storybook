import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  body {
    /* color: ${({ color, theme }) => (color ? color : `${theme.palette.primary.main}`)}; */
    ${({ color, theme }) =>
        css`
            color: ${color || `${theme.colors.blue700}`};
        `}
    font-size: 14px;
  }

`;
