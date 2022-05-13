import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({ size, color, name, className, style, path }) => {
    const styles = { ...defaultStyles, ...style };
    const viewBox = "0 0 24 24";
    const xmlns = "http://www.w3.org/2000/svg";
    const xmlnsXlink = "http://www.w3.org/1999/xlink";

    return (
        <svg
            className={className}
            style={styles}
            viewBox={viewBox}
            width={`${size}px`}
            height={`${size}px`}
            xmlns={xmlns}
            xmlnsXlink={xmlnsXlink}>
            <path fill={color} />
        </svg>
    );
};

Icon.defaultProps = {
    size: 16,
    color: "#000000",
    viewBox: "0 0 24 24",
    style: {},
    className: "",
};

Icon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    style: PropTypes.shape(PropTypes.object),
    className: PropTypes.string,
};

export default Icon;
