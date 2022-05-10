import PropTypes from "prop-types";
import { StyledButton } from "./Button.Styled";

const Button = props => {
    const { backgroundColor, size, variant, handleClick, label } = props;



    return (
        <StyledButton onClick={handleClick} backgroundColor={backgroundColor} size={size} variant={variant}>
            {label}
        </StyledButton>
    );
};

Button.propTypes = {
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: PropTypes.oneOfType([PropTypes.oneOf(["contained", "outlined", "text"]), PropTypes.string]),
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    /**
     * The size of the component.
     * @default 'medium'
     */
    size: PropTypes.oneOfType([PropTypes.oneOf(["small", "medium", "large"]), PropTypes.string]),
    handleClick: PropTypes.func,
};

export default Button;
