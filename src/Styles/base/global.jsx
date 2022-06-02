import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  body {
    ${({ theme, color }) => {
        const { palette, typography } = theme;
        return css`
            color: ${color || palette.primary.main};
            font-size: ${typography.fontSize + "px"};
        `;
    }}}

`;
