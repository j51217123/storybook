import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const StyledCircularProgress = styled(CircularProgress)`
    margin-left: ${starIcon => (starIcon ? "8px" : `0px`)};
    margin-right: ${endIcon => (endIcon ? "8px" : `0px`)};

`;
