import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledSwitchContainer, StyledSlider, StyledSwitch, StyledThumb, StyledLabel } from "./Switch.Styled";

const Switch = props => {
    const { color, className, size, isDisabled } = props;
    const [checked, setChecked] = useState(false);

    const onChange = e => {
        setChecked(e.target.checked);
    };

    return (
        <>
            <StyledSwitchContainer className={className}>
                <StyledSwitch className="StyledSwitch" onChange={onChange}  disabled={isDisabled} />
                <StyledSlider className="StyledSlider" size={size} disabled={isDisabled} color={color}>
                    <StyledThumb></StyledThumb>
                    <StyledLabel>這是一段測試文字這是一段測試文字</StyledLabel>
                </StyledSlider>
            </StyledSwitchContainer>
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

};

export default Switch;
