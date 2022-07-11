import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledSwitchWrapper, StyledSlider, StyledSwitch, StyledThumb } from "./Switch.Styled";

const Switch = props => {
    const { color, className, size, isDisabled } = props;
    const [checked, setChecked] = useState(false);

    const onChange = e => {
        setChecked(e.target.checked);
    };

    return (
        <>
            <StyledSwitchWrapper className={className}>
                <StyledSwitch className="StyledSwitch" onChange={onChange} color={color} disabled={isDisabled} />
                <StyledSlider className="StyledSlider" size={size} disabled={isDisabled}>
                    <StyledThumb ></StyledThumb>
                    <span>這是一段測試文字這是一段測試文字</span>
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
