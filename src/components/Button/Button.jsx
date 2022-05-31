import PropTypes from "prop-types";
import { StyledButton } from "./Button.Styled";
import { StartIcon, EndIcon } from "../Icon/Icons.Styled";
import CircularProgress from "../CircularProgress/CircularProgress";

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

    // const FirstIcon = () => {
    //     if (isLoading) {
    //         return <CircularProgress size={16} sx={{ color: `${color || iconColor}` }} variant="indeterminate" />;
    //     } else if (startIcon) {
    //         return (
    //             <StartIcon
    //                 children={children}
    //                 isDisabled={isDisabled}
    //                 isLoading={isLoading}
    //                 name={startIcon}
    //                 iconColor={iconColor}
    //             />
    //         );
    //     } else {
    //         return null;
    //     }
    // };

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
                    {endIcon ? (
                        <>
                            <span>{children}</span>
                            <EndIcon
                                name={endIcon}
                                children={children}
                                isLoading={isLoading}
                                isDisabled={isDisabled}
                                color={color}
                                iconColor={iconColor}
                            />
                        </>
                    ) : (
                         (startIcon &&
                            <>
                                <StartIcon
                                    name={startIcon}
                                    children={children}
                                    isLoading={isLoading}
                                    isDisabled={isDisabled}
                                    color={color}
                                    iconColor={iconColor}
                                />
                                <span>{children}</span> 
                            </>
                        )// children 待處理
                    )}
                    {/* {isLoading && <CircularProgress size={16} sx={{ color: `${color}` }} variant="indeterminate" />} */}
                    {/* {startIcon && (
                        <StartIcon
                            name={startIcon}
                            children={children}
                            isLoading={isLoading}
                            isDisabled={isDisabled}
                            color={color}
                            iconColor={iconColor}
                        />
                    )} */}

                    {/* <FirstIcon
                        children={children}
                        isDisabled={isDisabled}
                        isLoading={isLoading}
                        name={startIcon}
                        iconColor={iconColor}
                    /> */}
                    {/* <span>{children}</span> */}
                    {/* {endIcon && (
                        <EndIcon
                            name={endIcon}
                            children={children}
                            isLoading={isLoading}
                            isDisabled={isDisabled}
                            color={color}
                            iconColor={iconColor}
                        />
                    )} */}
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
