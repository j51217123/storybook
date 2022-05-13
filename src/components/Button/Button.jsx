import PropTypes from "prop-types";
import { StyledButton} from "./Button.Styled";
import Icon from "../Icon/Icon";

const Button = props => {
    const {
        backgroundColor,
        borderColor,
        color,
        size,
        variant = "contained",
        onClick,
        isDisabled,
        children,
        startIcon,
        endIcon,
    } = props;

    return (
        <StyledButton
            onClick={isDisabled ? null : onClick}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            color={color}
            size={size}
            variant={variant}
            isDisabled={isDisabled}>
            {/* {startIcon && <StartIcon>{startIcon}</StartIcon>} */}
            <Icon name="delete_24px" size={32} color="#f78259" /> 
            <span>{children}</span>
            {/* {endIcon && <EndIcon>{endIcon}</EndIcon>} */}
        </StyledButton>
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
};

export default Button;
