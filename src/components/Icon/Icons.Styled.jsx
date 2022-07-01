import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const StyledIcon = styled(SVG)`
    ${({ theme, color, iconColor }) => {
        const { palette } = theme;
        return css`
            line-height: 1;
            margin-left: ${({ iconPosition }) => (iconPosition === "end" ? 8 : 0) + "px"};
            margin-right: ${({ iconPosition }) => (iconPosition === "end" ? 0 : 8) + "px"};

            svg {
                width: ${({ size }) => size};
                height: ${({ size }) => size};
                fill: ${color || iconColor || palette.primary.main};
            }
        `;
    }}
`;
