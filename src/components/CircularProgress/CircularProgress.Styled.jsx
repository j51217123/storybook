import styled, { css } from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";


export const StyledCircularProgress = styled(CircularProgress)`
    ${() => {
        return css`
            margin-left: ${({ iconPosition }) => (iconPosition === "end" ? 8 : 0) + "px"};
            margin-right: ${({ iconPosition }) => (iconPosition === "start" ? 8 : 0) + "px"};
        `;
    }}
`;
