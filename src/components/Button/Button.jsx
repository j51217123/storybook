import PropTypes from "prop-types";
import { StyledButton, StyledCircularProgress } from "./Button.Styled";
import { StartIcon, EndIcon } from "../Icon/Icons.Styled";
import { test } from "../../Styles/utilities/Palette";

const Button = props => {
    const {
        backgroundColor,
        borderColor,
        iconColor,
        color,
        size,
        variant,
        onClick,
        isDisabled,
        isLoading,
        children,
        startIcon,
        endIcon,
    } = props;

    return (
        <>
            <StyledButton
                onClick={isDisabled ? null : onClick}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                color={color}
                size={size}
                variant={variant}
                disabled={isDisabled}>
                <>
                    {startIcon && <StartIcon children={children} isLoading={isLoading} name={startIcon} iconColor={iconColor} />}
                    <span>{children}</span>
                    {endIcon && <EndIcon isLoading={isLoading} name={endIcon} iconColor={iconColor} />}
                </>
            </StyledButton>
        </>
    );
};

Button.propTypes = {
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(["contained", "outlined", "text"], PropTypes.string),
    /**
     * Button contents.
     */
    children: PropTypes.string,
    backgroundColor: PropTypes.string,
    /**
     * The size of the component.
     * @default 'medium'
     */
    size: PropTypes.oneOf(["small", "medium", "large"], PropTypes.string),
    onClick: PropTypes.func,
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};

export default Button;
