import PropTypes from "prop-types";
import { StyledButtonBase } from "./ButtonBase.Styled";

const ButtonBase = ({ ...rest }) => {
    return <StyledButtonBase {...rest}></StyledButtonBase>;
};

ButtonBase.propTypes = {
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

export default ButtonBase;
