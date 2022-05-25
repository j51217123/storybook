import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  body {
    /* color: ${({ color, theme }) => (color ? color : `${theme.palette.primary.main}`)}; */
    ${({ color, theme }) =>
        css`
            color: ${color ||`${theme.colors.blue700}`};
        `}

  }

`;

// ${({ color }) =>
// color &&
// css`
//     fill: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)}; ;
// `}
