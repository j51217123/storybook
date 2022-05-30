import PropTypes from "prop-types";
import { StyledCircularProgress } from "./CircularProgress.Styled";

const CircularProgress = props => {
    const { sx = [], color, className, size, variant } = props;
    return (
        <>
            <StyledCircularProgress
                sx={[
                    {
                        color: `${color}`,
                    },
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                color={color}
                className={className}
                size={size}
                variant={variant}
            />
        </>
    );
};

export default CircularProgress;
