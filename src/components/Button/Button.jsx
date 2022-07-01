import PropTypes from "prop-types";
import { StyledButton } from "./Button.Styled";
import Icon from "../Icon/Icon";

const Button = props => {
    const {
        className,
        backgroundColor,
        borderColor,
        iconColor,
        color,
        size,
        variant,
        onClick,
        isDisabled,
        isLoading,
        label,
        iconName,
        iconPosition,
    } = props;

    return (
        <>
            <StyledButton
                className={className}
                onClick={isDisabled ? null : onClick}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                color={color}
                size={size}
                variant={variant}
                disabled={isDisabled}>
                <>
                    {iconPosition === "end" ? (
                        <>
                            <span>{label}</span>
                            <Icon
                                color={color}
                                // children={children}
                                iconName={iconName}
                                iconColor={iconColor}
                                iconPosition={iconPosition}
                                isLoading={isLoading}
                                isDisabled={isDisabled}
                            />
                        </>
                    ) : (
                        <>
                            <Icon
                                color={color}
                                // children={children}
                                iconName={iconName}
                                iconColor={iconColor}
                                iconPosition={iconPosition}
                                isLoading={isLoading}
                                isDisabled={isDisabled}
                            />
                            <span>{label}</span>
                        </>
                    )}
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
    label: PropTypes.string,
    className: PropTypes.string,
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

Button.defaultProps = {
    variant: "contained",
    children: "",
    className: "",
    isLoading: false,
    isDisabled: false,
    onClick: () => {},
};

export default Button;
