import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledInput, StyledLabel, StyledThumb } from "./Switch.Styled2";

const Switch2 = props => {
    const { id } = props;
    const [checked, setChecked] = useState(false);

    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <StyledInput className="StyledInput" id={id} onChange={onChange} checked={checked} />
            <StyledLabel htmlFor={id}>
                <StyledThumb />
            </StyledLabel>
        </>
    );
};

Switch2.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    /**
     * The size of the component.
     * @default 'medium'
     */
    size: PropTypes.oneOf(["small", "medium", "large"], PropTypes.string),
    isDisabled: PropTypes.bool,
};

Switch2.defaultProps = {
    id: "switchControl",
};

export default Switch2;
