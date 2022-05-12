import styled from "styled-components";

export const StyledStack = styled.div.attrs(({ spacing, direction }) => ({
    spacing: spacing || 0,
    direction: direction || "row",
}))`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    gap: ${({ spacing }) => spacing * 0.25}rem;
`;

export const StyledStackChildren = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    background-color: #e7ebf0;
`;
