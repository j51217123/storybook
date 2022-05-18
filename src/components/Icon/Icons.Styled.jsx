import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";
import SVG from "react-inlinesvg";
import Icon from "./Icon";

export const TestStyleIcon = styled.svg`
    width: 24px;
    height: 24px;
    fill: black;
`;

export const StartIcon = styled(Icon)`
    margin-right: 8px;
`;

export const EndIcon = styled(Icon)`
    margin-left: 8px;
`;

export const StyledIcon = styled(ReactSVG)`
    svg {
        fill: ${({ theme }) => `${theme.colors.blue700}`};

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
                    fill: ${color};
                `}
        }
    }
`;

export const StyledTestIcon = styled(SVG)`
    svg {
        fill: ${({ theme }) => `${theme.colors.black}`};

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
                    fill: ${color};
                `}
        }
    }
`;
