import styled, { css } from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";

const textButtonStyle = css`
    background: #fff;
    color: ${({theme})=>{
        return(
            console.log(theme)
        )
    }}
    border: 1px solid #1976d2;
    &:hover {
        background: #1976d210;
    }
`;

const containedButtonStyle = css`
    background: #1976d2;
    color: #fff;
`;

const outlinedButtonStyle = css`
    background: #fff;
    color: #1976d2;
    border: 1px solid #1976d2;
    &:hover {
        background: #1976d210;
    }
`;

const variantMap = {
    text: textButtonStyle,
    contained: containedButtonStyle,
    outlined: outlinedButtonStyle,
};

export const StyledButton = styled(ButtonBase).attrs(({ backgroundColor, size, scale, variant }) => ({
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
    backgroundColor,
    variant,
}))`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: ${({ scale }) => scale * 0.5}rem ${({ scale }) => scale * 1}rem;
    ${({ variant }) => variantMap[variant] || variantMap.primary}
`;
