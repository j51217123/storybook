import PropTypes from "prop-types";

const Button = ({ variant, label, backgroundColor = "red", size = "medium", handleClick }) => {
    let scale = 1;
    if (size === "small") scale = 0.75;
    if (size === "large") scale = 1.5;
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    };
    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: PropTypes.oneOfType(
      [PropTypes.oneOf(["contained", "outlined", "text"]), 
      PropTypes.string]
    ),
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    /**
     * The size of the component.
     * @default 'medium'
    */
    size: PropTypes.oneOfType(
      [PropTypes.oneOf(["small", "medium", "large"]), 
      PropTypes.string]
    ),
    handleClick: PropTypes.func,
};

export default Button;