import PropTypes from "prop-types";

function Stack(props) {
    const { children, spacing = 2, direction = "row",} = props;
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexDirection: direction,
    };
    return <div style={style}>{children}</div>;
}

Stack.propTypes = {
    /**
     * Defines the space between immediate children.
     * @default 0
     */
    spacing: PropTypes.number,

    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'row'
     */
    direction: PropTypes.oneOfType([PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]), PropTypes.string]),
};

export default Stack;
