import PropTypes from "prop-types";
import { StyledButton } from "./Button.Styled";
import Icon from "../Icon/Icon";
import etToday from "../../Images/icon_ettoday.png";
import Delete from "../../Images/delete.svg";
import Test from '../../Images/icon-arrowbottom-svgo.svg'
import Dark from '../../Images/dark.svg'

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
        <>
            <StyledButton
                onClick={isDisabled ? null : onClick}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                color={color}
                size={size}
                variant={variant}
                isDisabled={isDisabled}>
                {/* {startIcon && <StartIcon>{startIcon}</StartIcon>} */}
                <Icon name="dark" size={16}/>
                {/* <img src={Test} alt="" /> */}
                {/* <img src={etToday} alt="" width="24" height="24" /> */}
                <span>{children}</span>
                {/* {endIcon && <EndIcon>{endIcon}</EndIcon>} */}
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
};

export default Button;
