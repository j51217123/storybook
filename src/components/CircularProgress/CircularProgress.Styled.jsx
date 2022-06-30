import styled, { css } from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const StyledCircularProgress = styled(CircularProgress)`
    ${({ theme, sx }) => {
        // const { palette } = theme;
        const { color, iconColor } = sx;
        
        return css`
            margin-left: ${({ iconPosition }) => (iconPosition === "end" ? 8 : 0) + "px"};
            margin-right: ${({ iconPosition }) => (iconPosition === "end" ? 0 : 8) + "px"};
            color: ${iconColor || color};
        `;
    }}
`;
