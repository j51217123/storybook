import styled, { css } from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";

const disabledStyle = css`
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.26);
    &:hover,
    &:active {
        opacity: 1;
    }
`;

const textStyle = css`
    background-color: ${({ theme }) => `${theme.colors.white}`};
    background-color: ${({ isDisabled, theme }) => (isDisabled ? `${theme.colors.white}` : `${theme.colors.white}`)};
    color: ${({ theme }) => `${theme.colors.blue700}`};
    &:hover {
        background-color: ${({ theme }) => `${theme.colors.blue700}0a`};
        color: ${({ isDisabled }) => (isDisabled ? null : `rgba(0, 0, 0, 0.26)`)};
    }
`;

const containedStyle = css`
    background-color: ${({ theme }) => `${theme.colors.blue700}`};
    color: ${({ theme }) => `${theme.colors.white}`};
    &:hover {
        background-color: ${({ isDisabled, theme }) => (isDisabled ? null : `${theme.colors.blue800}`)};
    }
`;

const outlinedStyle = css`
    background-color: ${({ theme }) => `${theme.colors.white}`};
    color: ${({ theme }) => `${theme.colors.blue700}`};
    border: 1px solid ${({ theme }) => `${theme.colors.blue700}`};
    &:hover {
        background-color: ${({ theme }) => `${theme.colors.blue700}0a`};
    }
`;

const variantMap = {
    text: textStyle,
    contained: containedStyle,
    outlined: outlinedStyle,
};

export const StyledButton = styled(ButtonBase).attrs(({ backgroundColor, size, scale, variant, isDisabled }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
    backgroundColor,
    variant,
    isDisabled,
}))`
    border-radius: 4px;
    font-size: ${({ theme }) => `${theme.fontSizes.sm}`};
    font-weight: ${({ theme }) => `${theme.fontWeights.medium}`};
    background-color: ${({ backgroundColor }) => backgroundColor};
    letter-spacing: ${({ theme }) => `${theme.letterSpacings.wide}`};
    padding: ${({ scale }) => scale * 0.5}rem ${({ scale }) => scale * 1}rem;
    ${({ variant }) => variantMap[variant] || variantMap.primary};
    ${({ isDisabled }) => (isDisabled ? disabledStyle : null)};
`;
