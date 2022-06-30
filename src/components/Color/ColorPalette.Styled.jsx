import styled from "styled-components";

export const StyledH1 = styled.h1`
    margin-bottom: 10px;
`

export const StyledColorBlockWrapper = styled.div`
    border-radius:10px;
    overflow: hidden;
    box-shadow: rgba(17, 22, 26, 0.16) 0px 4px 8px 0px;
`

export const StyledColorPaletteWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledColorPaletteContainer = styled.div`
    flex-direction: column;
    padding: 10px;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
`;

export const StyledColorBlock = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ bgColor }) => bgColor};
    padding: 10px;
`;
