import PropTypes from "prop-types";
import { StyledIcon } from "./Icons.Styled";

const Icon = ({ color, size, title, name, className, transform }) => {
    // const styles = { ...defaultStyles, ...style };
    return (
    
    <StyledIcon src={`/${name}.svg`} color={color} size={size} transform={transform} />
    );
};


Icon.defaultProps = {
    size: 16,
    // color: "#000000",
    viewBox: "0 0 24 24",
    style: {},
    className: "",
};

// Icon.propTypes = {
//     size: PropTypes.number.isRequired,
//     color: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//     viewBox: PropTypes.string.isRequired,
//     style: PropTypes.shape(PropTypes.object),
//     className: PropTypes.string,
// };

export default Icon;
