import PropTypes from "prop-types";
import { StyledCircularProgress } from "./CircularProgress.Styled";

const CircularProgress = props => {
    const { sx = [], color, className, size, variant, iconPosition } = props;
    return (
        <>
            <StyledCircularProgress
                sx={[
                    {
                        color,
                    },
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                color={color}
                className={className}
                size={size}
                variant={variant}
                iconPosition={iconPosition}
            />
        </>
    );
};

export default CircularProgress;
