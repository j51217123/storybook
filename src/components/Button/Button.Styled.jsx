import styled, { css } from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";
import CircularProgress from '@mui/material/CircularProgress';

const disabledStyle = css`
    cursor: not-allowed;
    border: ${({ variant }) => (variant === "outlined" ? "1px solid rgba(0, 0, 0, 0.26)" : "none")};
    color: rgba(0, 0, 0, 0.26);
    background-color: ${({ variant, theme }) =>
        variant === "outlined" ? `${theme.colors.white}` : "rgba(0, 0, 0, 0.12)"};

    &:hover,
    &:active {
        opacity: 1;
        border: none;
        background-color: rgba(0, 0, 0, 0.12);
    }
`;

const textStyle = css`
    background-color: ${({ isDisabled, theme }) => (isDisabled ? `${theme.colors.white}` : `${theme.colors.white}`)};
    /* color: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)}; */
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
    background-color: ${({ theme }) => `${theme.colors.white}`};
    color: ${({ color, theme }) => (color ? color : `${theme.colors.blue700}`)};
    border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : `rgba(25, 118, 210, 0.5)`)};
    transition: background-color 250ms, border 250ms;

    &:hover {
        background-color: ${({ color, theme }) => (color ? `${color}0a` : `${theme.colors.blue700}0a`)};
        border: 1px solid ${({ theme }) => `${theme.colors.blue700}`};
    }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  /* margin-right: 8px; */
  color: ${(props) => (props.variant === 'contained' ? '#FFF' : props.color)} !important;

`;

const variantMap = {
    text: textStyle,
    contained: containedStyle,
    outlined: outlinedStyle,
};

export const StyledButton = styled(ButtonBase).attrs(
    ({ backgroundColor, borderColor, color, size, scale, variant, isDisabled }) => ({
        scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
        backgroundColor,
        borderColor,
        color,
        variant,
        isDisabled,
    })
)`
    border-radius: 4px;
    font-size: ${({ theme }) => `${theme.fontSizes.sm}`};
    font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    letter-spacing: ${({ theme }) => `${theme.letterSpacings.wide}`};
    padding: ${({ scale }) => scale * 0.5}rem ${({ scale }) => scale * 1}rem;
    ${({ variant }) => variantMap[variant] || variantMap.primary};
    ${({ disabled }) => (disabled ? disabledStyle : null)};
`;
