import styled from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";

export const StyledButton = styled(ButtonBase).attrs(({backgroundColor, size, scale}) => ({
    backgroundColor: backgroundColor || "",
    scale: size === "small" ? (scale = 0.75) : size === "large" ? (scale = 1.5) : 1,
    size: size || "medium",
}))`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: ${({ scale }) => scale * 0.5}rem ${({ scale }) => scale * 1}rem;
`;
