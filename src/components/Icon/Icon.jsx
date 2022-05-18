import PropTypes from "prop-types";
import { StyledIcon, StyledTestIcon } from "./Icons.Styled";

const Icon = ({ color, size, name, className, transform }) => {
    return (
        <StyledIcon src={`/${name}.svg`} className={className} color={color} size={size} transform={transform} />
    );
};

Icon.defaultProps = {
    size: 16,
    color: "#000000",
    className: "",
};

Icon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.number,
};

export default Icon;
