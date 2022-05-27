import styled, { css } from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const customCircularStyle = css`
    /* .MuiCircularProgress-circle {
        color: ${({ color }) => color};
    } */
`;

export const StyledCircularProgress = styled(CircularProgress).attrs(({ color }) => ({
    color,
}))`
    margin-left: ${starIcon => (starIcon ? "8px" : `0px`)};
    margin-right: ${endIcon => (endIcon ? "8px" : `0px`)};
    /* ${({ className }) => (className ? customCircularStyle : null)}; */
`;
