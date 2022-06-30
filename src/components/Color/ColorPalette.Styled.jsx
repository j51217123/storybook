import styled from "styled-components";

export const StyledColorPaletteWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledColorPaletteContainer = styled.div`
    flex-direction: column;
    padding: 10px;
    text-align: center;
`;

export const StyledColorBlock = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ bgColor }) => bgColor};
    padding: 10px;
`;
