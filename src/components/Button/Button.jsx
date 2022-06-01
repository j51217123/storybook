import PropTypes from "prop-types";
import { StyledButton } from "./Button.Styled";
import Icon from '../Icon/Icon'

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
        iconName,
        iconPosition,
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
                    {iconPosition === "end" ? (
                        <>
                            <span>{children}</span>
                            <Icon
                                color={color}
                                children={children}
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
                                children={children}
                                iconName={iconName}
                                iconColor={iconColor}
                                iconPosition={iconPosition}
                                isLoading={isLoading}
                                isDisabled={isDisabled}
                            />
                            <span>{children}</span>
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
