import styled, { css } from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";

const disabledStyle = ({ theme, variant }) => {
    const { palette } = theme;
    return css`
        cursor: not-allowed;
        pointer-events: auto;
        border: ${variant === "outlined" ? "1px solid rgba(0, 0, 0, 0.26)" : "none"};
        color: rgba(0, 0, 0, 0.26);
        background-color: ${variant !== "contained" ? palette.background.default : "rgba(0, 0, 0, 0.12)"};

        &:hover,
        &:active {
            opacity: 1;
            border: ${variant === "outlined" ? "1px solid rgba(0, 0, 0, 0.26)" : "none"};
            background-color: ${variant !== "contained" ? palette.background.default : "rgba(0, 0, 0, 0.12)"};
        }

        svg {
            fill: rgba(0, 0, 0, 0.12);
        }
    `;
};

const textStyle = ({ theme, color }) => {
    const { palette } = theme;
    return css`
        background-color: ${palette.background.default};
        color: ${color || palette.primary.main};

        &:hover {
            background-color: ${`${color}0a` || `${palette.primary.main}0a`};
            transition: background-color 250ms;
        }
    `;
};

const containedStyle = ({ theme, backgroundColor, color, isDisabled }) => {
    const { palette } = theme;
    return css`
        background-color: ${backgroundColor || palette.primary.main};
        color: ${color || palette.common.white};
        transition: background-color 250ms;

        &:hover {
            background-color: ${isDisabled ? null : palette.primary.dark};
        }
    `;
};

const outlinedStyle = ({ theme, color, borderColor }) => {
    const { palette } = theme;
    return css`
        background-color: ${palette.background.default};
        color: ${color || palette.primary.main};
        border: 1px solid ${borderColor || `${palette.primary.main}80`};
        transition: background-color 250ms, border 250ms;

        &:hover {
            background-color: ${`${color}0a` || `${palette.primary.main}0a`};
            border: 1px solid ${borderColor || palette.primary.main};
        }
    `;
};

const variantMap = {
    text: textStyle,
    contained: containedStyle,
    outlined: outlinedStyle,
};

export const StyledButton = styled(ButtonBase).attrs(({ size, scale }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
}))`
    ${({ theme, color, backgroundColor }) => {
        const {
            typography: {
                button: { fontSize, fontWeight, letterSpacing },
            },
        } = theme;
        return css`
            color: ${color};
            border-radius: 4px;
            padding: ${({ scale }) => scale * 0.5 + "rem"} ${({ scale }) => scale * 1 + "rem"};
            background-color: ${backgroundColor};
            font-size: ${fontSize};
            font-weight: ${fontWeight};
            letter-spacing: ${letterSpacing};
            ${({ variant }) => variantMap[variant] || null};
            ${({ disabled }) => (disabled ? disabledStyle : null)};
        `;
    }}
`;
