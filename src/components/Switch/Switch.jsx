import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { StyledInput, StyledLabel, StyledThumb } from "./Switch.Styled";

const Switch = props => {
    const { id, color, isDisabled, size, checkedChildren, unCheckedChildren } = props;
    const [checked, setChecked] = useState(false);

    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <StyledInput
                className="StyledInput"
                id={id}
                onChange={onChange}
                checked={checked}
                color={color}
                disabled={isDisabled}
            />
            <StyledLabel className="StyledLabel" htmlFor={id} size={size} disabled={isDisabled}>
                <StyledThumb className="StyledThumb" />
                {checked ? checkedChildren : unCheckedChildren}
            </StyledLabel>
        </>
    );
};

Switch.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    /**
     * The size of the component.
     * @default 'medium'
     */
    size: PropTypes.oneOf(["small", "medium", "large"], PropTypes.string),
    isDisabled: PropTypes.bool,
};

Switch.defaultProps = {
    id: "switchControl",
    color: "#1976d2",
};

export default Switch;
