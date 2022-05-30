import styled, { css } from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";

const disabledStyle = css`
    cursor: not-allowed;
    pointer-events: auto;
    border: ${({ variant }) => (variant === "outlined" ? "1px solid rgba(0, 0, 0, 0.26)" : "none")};
    color: rgba(0, 0, 0, 0.26);
    background-color: ${({ variant, theme }) =>
        variant !== "contained" ? `${theme.colors.white}` : "rgba(0, 0, 0, 0.12)"};

    &:hover,
    &:active {
        opacity: 1;
        border: ${({ variant }) => (variant === "outlined" ? "1px solid rgba(0, 0, 0, 0.26)" : "none")};
        background-color: ${({ variant, theme }) =>
            variant !== "contained" ? `${theme.colors.white}` : "rgba(0, 0, 0, 0.12)"};
    }
`;

const textStyle = css`
    background-color: ${({ theme }) => `${theme.colors.white}`};
    color: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)};

    &:hover {
        background-color: ${({ color, theme }) => (color ? `${color}0a` : `${theme.colors.blue700}0a`)};
        transition: background-color 250ms;
    }
`;

const containedStyle = css`
    background-color: ${({ backgroundColor, theme }) =>
        backgroundColor ? backgroundColor : `${theme.colors.blue700}`};
    color: ${({ color, theme }) => (color ? color : `${theme.colors.white}`)};
    transition: background-color 250ms;

    &:hover {
        background-color: ${({ isDisabled, theme }) => (isDisabled ? null : `${theme.colors.blue800}`)};
    }
`;

const outlinedStyle = css`
    /* background-color: ${({ theme }) => `${theme.colors.white}`}; */
    color: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)};
    border: 1px solid
        ${({ borderColor, theme }) => (borderColor ? `${borderColor}80` : `${theme.palette.primary.main}80`)};
    transition: background-color 250ms, border 250ms;

    &:hover {
        background-color: ${({ color, theme }) => (color ? `${color}0a` : `${theme.colors.blue700}0a`)};
        border: 1px solid ${({ borderColor, theme }) => (borderColor ? borderColor : `${theme.palette.primary.main}`)};
    }
`;

const variantMap = {
    text: textStyle,
    contained: containedStyle,
    outlined: outlinedStyle,
};

/* font-size: ${({ theme }) => `${theme.fontSizes.sm}`}; */
// font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
// letter-spacing: ${({ theme }) => `${theme.letterSpacings.wide}`};
export const StyledButton = styled(ButtonBase).attrs(({ size, scale }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
}))`
    border-radius: 4px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    padding: ${({ scale }) => scale * 0.5}rem ${({ scale }) => scale * 1}rem;
    ${({ variant }) => variantMap[variant] || null};
    ${({ disabled }) => (disabled ? disabledStyle : null)};
`;
