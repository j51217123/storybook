import PropTypes from "prop-types";
import { StyledCircularProgress } from "./CircularProgress.Styled";

const CircularProgress = props => {
    const { color, className, size, variant } = props;
    return (
        <>
            <StyledCircularProgress color={color} className={className} size={size} variant={variant} />
        </>
    );
};

export default CircularProgress;
