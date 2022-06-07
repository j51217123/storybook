import PropTypes from "prop-types";
import { StyledCircularProgress } from "./CircularProgress.Styled";

const CircularProgress = props => {
    const { sx, className, size, variant, iconPosition } = props;
    
    return (
        <>
            <StyledCircularProgress
                sx={sx}
                className={className}
                size={size}
                variant={variant}
                iconPosition={iconPosition}
            />
        </>
    );
};

CircularProgress.defaultProps = {};

export default CircularProgress;
