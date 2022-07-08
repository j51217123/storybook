import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledSwitchWrapper, StyledSlider, StyledSwitch } from "./Switch.Styled";

const Switch = props => {
    const { color, size, isDisabled } = props;
    const [checked, setChecked] = useState(false);

    const onChange = e => {
        setChecked(e.target.checked);
    };

    return (
        <>
            <StyledSwitchWrapper>
                <StyledSwitch className="StyledSwitch" onChange={onChange} color={color} disabled={isDisabled}/>
                <StyledSlider className="StyledSlider" size={size} disabled={isDisabled} >
                </StyledSlider>
            </StyledSwitchWrapper>
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

export default Switch;
