import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";
// import SVG from "react-inlinesvg";
import Icon from "./Icon";

export const StartIcon = styled(Icon)`
    margin-right: 8px;
`;

export const EndIcon = styled(Icon)`
    margin-left: 8px;
`;

export const StyledIcon = styled(ReactSVG)`
    line-height: 1;
    width: ${({ size }) => `${size}`};
    height: ${({ size }) => `${size}`};

    svg {
        /* fill: ${({ iconColor, theme }) => (iconColor ? iconColor : `${theme.colors.blue700}`)}; */
        fill: ${({ iconColor, theme }) => {
            console.log(theme, "theme");
            return iconColor ? iconColor : `${theme.colors.blue700}`;
        }};

        ${({ size }) =>
            size &&
            css`
                width: ${size};
                height: ${size};
            `}
        ${({ transform }) =>
            transform &&
            css`
                transform: ${transform};
            `}
    path {
            ${({ color }) =>
                color &&
                css`
                    fill: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)}; ;
                `}
        }
    }
`;
