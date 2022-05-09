import PropTypes from "prop-types";
import styled, { css } from 'styled-components';


// const ButtonBase = ({ style, ...rest }) => {
//     const buttonBaseStyle = {
        // minWidth: "64px",
        // display: "inline-flex",
        // alignItems: "center",
        // justifyContent: "center",
        // size: "medium",
        // boxSizing: "border-box",
        // backgroundColor: "transparent",
        // margin: 0, // Remove the margin in Safari
        // padding: 0, // Remove the padding in Firefox
        // outline: 0,
        // border: 0,
        // borderRadius: 0,
        // cursor: "pointer",
        // userSelect: "none",
        // color: "inherit",
        // verticalAlign: "middle",
        // textDecoration: "none",
        // mozAppearance: "none", // Reset
        // webkitAppearance: "none", // Reset
        // label: "",
//         ...style
//     };

//     return <button style={buttonBaseStyle} { ...rest }></button>;
// };

const ButtonBase = ({...rest}) => {
    return (
        <ButtonBaseRoot {...rest}></ButtonBaseRoot>
    )
}

const ButtonBaseRoot = styled.button`
    min-width: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    size: medium;
    box-sizing: border-box;
    background-color: transparent;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    user-select: none;
    color: inherit;
    vertical-align: middle;
    text-decoration: none;
    -moz-appearance: none;
    -webkit-appearance: none;
`;

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
